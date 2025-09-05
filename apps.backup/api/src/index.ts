import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import dotenv from 'dotenv';
<<<<<<< HEAD
import { createOpenAIClient, generateJobPost } from './openai.js';
import { getPool, withUser } from './pg.js';
;
dotenv.config();
;
const app = Fastify({ logger:true });
;
await app.register(cors, {;
  origin:(origin, cb) => {;
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {;
=======
import {
  createOpenAIClient, generateJobPost, withUser} from './openai';

dotenv.config();

const app = Fastify({logger: true});

await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORSORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD
  },;
  methods:['GET', 'POST', 'OPTIONS'];
});
;
await app.register(rateLimit, { global:true, max:100, timeWindow:'1m' });
;
const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');
;
function getUserId(req:any):string | null {;
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}
;
app.post('/ai/ask', async (req, reply) => {;
  const body = (req.body as any) || {};
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error:'prompt required' });
  const completion = await openai.responses.create({ model:'gpt-4o-mini', input:prompt });
  return { text:completion.output_text };
});
;
app.post('/jobs/generate', async (req, reply) => {;
  const body = (req.body as any) || {};
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  const role = (body.role as string) || 'Engineer';
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
  if (!userId) return { description };
<<<<<<< HEAD
  await withUser(userId, async (client) => {;
    await client.query(;
      `INSERT INTO job_post (user_id, title, description, location, tags, status);
       VALUES ($1, $2, $3, $4, $5, 'draft')`,;
      [userId, role, description, body.location || null, body.tags || null];
    );
  });
  return { saved:Boolean(userId), description };
});
;
app.get('/talent/search', async (req, reply) => {;
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error:'unauthorized' });
  const rows = await withUser(userId, async (client) => {;
    const res = await client.query(;
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
       WHERE ($1:text IS NULL OR country = $1);
         AND ($2:text IS NULL OR EXISTS (;
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%';
           ));
       ORDER BY created_at DESC;
       LIMIT 25`,;
      [country || null, q || null];
    );
    return res.rows;
  });
  return { results:rows };
});
;
app.get('/projects/:name/track', async (req, reply) => {;
  const name = (req.params as any).name as string;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error:'unauthorized' });
  const project = await withUser(userId, async (client) => {;
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0];
  });
  if (!project) return reply.code(404).send({ error:'not found' });
  return { project };
});
;
app.get('/notifications', async (req, reply) => {;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error:'unauthorized' });
  const items = await withUser(userId, async (client) => {;
    const res = await client.query(;
      `SELECT id, channel, title, body, data, read, created_at FROM notification;
       WHERE read = false ORDER BY created_at DESC LIMIT 20`;
    );
    return res.rows;
  });
  return { items };
});
;
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host:'0.0.0.0' }).catch((err) => {;
  app.log.error(err);
  process.exit(1);
});
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
