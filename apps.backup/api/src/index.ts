import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import dotenv from 'dotenv';
import {
  createOpenAIClient, generateJobPost, withUser} from './openai';

dotenv.config();

const app = Fastify({logger: true});

await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORSORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
  },
  methods: ['GETPOST', 'OPTIONS']
});

await app.register(rateLimit, {global: true, max: 100, timeWindow: '1m'});

const openai = createOpenAIClient(process.env.OPENAIAPIKEY || '');

function getUserId(req: unknown): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['userid'] || null;
}

app.post('/ai/ask', async (req, reply) => {
  const body = (req.body as any) || {};
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({error: 'prompt required'});
  const completion = await openai.responses.create({model: 'gpt-4o-mini', input: prompt});
  return {
  text: completion.outputtext};
});

app.post('/jobs/generate', async (req, reply) => {const body = (req.body as any) || {};
  const role = (body.role as string) || 'Engineer';
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
  if (!userId) return { description };
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO jobpost (userid, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`, 
      [userId, role, description, body.location || null, body.tags || null]
    );
  });
  return { description };
});

app.post('/jobs/apply', async (req, reply) => {
  const body = (req.body as any) || {};
  const jobId = body.jobid as string;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({error: 'unauthorized'});
  if (!jobId) return reply.code(400).send({error: 'jobid required'});
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO jobapplication (userid, jobid, status, appliedat)
       VALUES ($1, $2, 'pending', NOW())`, 
      [userId, jobId]
    );
  });
  return { success: true };
});

app.get('/jobs', async (req, reply) => {
  const userId = getUserId(req);
  const jobs = await withUser(userId, async (client) => {
    const result = await client.query(
      `SELECT j.*, u.name as authorname
       FROM jobpost j
       LEFT JOIN users u ON j.userid = u.id
       WHERE j.status = 'active'
       ORDER BY j.createdat DESC
       LIMIT 50`
    );
    return result.rows;
  });
  return { jobs };
});

app.get('/jobs/:id', async (req, reply) => {
  const jobId = (req.params as any).id;
  const job = await withUser(null, async (client) => {
    const result = await client.query(
      `SELECT j.*, u.name as authorname
       FROM jobpost j
       LEFT JOIN users u ON j.userid = u.id
       WHERE j.id = $1`, 
      [jobId]
    );
    return result.rows[0];
  });
  if (!job) return reply.code(404).send({error: 'job not found'});
  return { job };
});

app.get('/health', async (req, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

const start = async () => {
  try {
    await app.listen({ port: 3001, host: '0.0.0.0'});
    console.log('Server listening on port 3001');
  } catch (err) {
    console.error('Error starting server:', err);
  }
};

start();