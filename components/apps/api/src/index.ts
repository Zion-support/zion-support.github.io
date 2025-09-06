import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost } from './openai.js';
import { getPool, withUser } from './pg.js';

dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: (origin, cb) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const allowed = (process.env.CORS_ORIGINS || '')
      .split(',')
      .map(s => s.trim());
=======
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim());
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb(null, true);
      return
    }
<<<<<<< HEAD
    cb(new Error('Not allowed'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
=======
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb(null, true);
      return
    }
    cb(new Error('Not allowed'), false)
  };
  methods: ['GETPOSTOPTIONS']
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    cb(new Error('Not allowed'), false)
  };
  methods: ['GETPOSTOPTIONS']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});

await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });

const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');

function getUserId(req: any): string | null {
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    (req.headers['x-user-id'] as string) ||
    (req.query as any)['user_id'] ||
    null
  );
=======
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

app.post('/ai/ask', async (req, reply) => {
  const body = (req.body as any) || {};
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
<<<<<<< HEAD
<<<<<<< HEAD
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return { text: completion.output_text };
=======
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});

app.post('/jobs/generate', async (req, reply) => {
  const body = (req.body as any) || {};
  const role = (body.role as string) || 'Engineer';
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
  if (!userId) return { description };
<<<<<<< HEAD
<<<<<<< HEAD
  await withUser(userId, async client => {
=======
  await withUser(userId, async (client) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [userId, role, description, body.location || null, body.tags || null]
    )
  });
<<<<<<< HEAD
  return { saved: Boolean(userId), description };
=======
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [userId, role, description, body.location || null, body.tags || null]
    )
  });
  return { saved: Boolean(userId), description }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return { saved: Boolean(userId), description }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});

app.get('/talent/search', async (req, reply) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
<<<<<<< HEAD
<<<<<<< HEAD
  const rows = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
=======
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
           ))
       ORDER BY created_at DESC
<<<<<<< HEAD
<<<<<<< HEAD
       LIMIT 25`,
=======
       LIMIT 25`;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      [country || null, q || null]
    );
    return res.rows
  });
<<<<<<< HEAD
  return { results: rows };
=======
       LIMIT 25`;
      [country || null, q || null]
    );
    return res.rows
  });
  return { results: rows }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return { results: rows }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});

app.get('/projects/:name/track', async (req, reply) => {
  const name = (req.params as any).name as string;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
<<<<<<< HEAD
<<<<<<< HEAD
  const project = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`,
      [name]
    );
    return res.rows[0];
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project };
=======
  const project = await withUser(userId, async (client) => {
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0]
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const project = await withUser(userId, async (client) => {
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0]
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
});

app.get('/notifications', async (req, reply) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
<<<<<<< HEAD
<<<<<<< HEAD
  const items = await withUser(userId, async client => {
=======
  const items = await withUser(userId, async (client) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const items = await withUser(userId, async (client) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
<<<<<<< HEAD
<<<<<<< HEAD
    return res.rows;
=======
    return res.rows
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  });
  return { items }
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
<<<<<<< HEAD
  process.exit(1);
});
=======
    return res.rows
  });
  return { items }
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
  process.exit(1)
});
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  process.exit(1)
});
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
