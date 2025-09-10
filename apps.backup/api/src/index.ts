import Fastify from 'fastify';
import cors from '@fastify / cors';
import rate_limit from '@fastify / rate - limit';
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost } from './openai.js';
import { getPool, withUser } from './pg.js';

import { createOpenAIClient, generateJobPost } from './openai ;
import { getPool, withUser } from './pg ;
dotenv && dotenv.config();

const app = Fastify({ logger: true });
await app && app.register(cors, {
  origin: (origin, cb) => {

    const allowed = (process && process.env.CORS_ORIGINS || '').split().map((s) => s && s.trim());
    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {

      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
  }
  methods: ['GET', 'POST', 'OPTIONS']
});

await app && app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });

const openai = createOpenAIClient(process && process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (req && req.headers['x-user-id'] as string) || (req && req.query as any)['user_id'] || null;
}

app && app.post('/ai/ask', async (req, reply) => {
  const body = (req && req.body as any) || {};
  const prompt = body && body.prompt as string;
  if (!prompt) return reply && reply.code(400).send({ error: 'prompt required' });
  const completion = await openai && openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion && completion.output_text };
});

app && app.post('/jobs/generate', async (req, reply) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';

  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
  if (!userId) return { description }
  await withUser(userId, async (client) => {
    await client && client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;

      [userId, role, description, body && body.location || null, body && body.tags || null]

    )
import { get_pool, with_user } from './pg.js';
dotenv.config ();
;
const app = Fastify ({ logger: true });
await app.register (cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS || '').split ().map ((s) => s.trim ());
    if (|| allowed.includes (origin)) {) {
  $2
}
      cb (null, true);
      return;
    }
    cb (new Error ('Not allowed'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'];
});
;
await app.register (rate_limit, { global: true, max: 100, time_window: '1m' });
const openai = createOpenAIClient (process.env.OPENAI_API_KEY || '');
function getUserId (req: any): string | null {
  return (req.headers['x - user - id'] as string) || (req.query as any)['user_id'] || null;
}
app.post ('/ai / ask', async (req, reply) => {
  const body = (req.body as any) || {}
  const prompt = body.prompt as string;
  if (return reply.code (400).send ({ error: 'prompt required' })) {
  $2
}
  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });
  return { text: completion.output_text }
});
;
app.post ('/jobs / generate', async (req, reply) => {
  const body = (req.body as any) || {}
  const role = (body.role as string) || 'Engineer';
  });
  return { saved: Boolean (user_id), description }
});
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async (client) => {
    const res = await client && client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`;
      [country |null, q |null]
    );
    return res && res.rows
  });
  return { results: rows }
});
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const project = await withUser(userId, async (client) => {
    const res = await client && client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res && res.rows[0]
  });
  if (!project) return reply && reply.code(404).send({ error: 'not found' });
  return { project }
});
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async (client) => {
    const res = await client && client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows
  });
  return { items }
});
const port = Number(process.env.API_PORT |4000);

const port = Number(process && process.env.API_PORT || 4000);
app && app.listen({ port, host: '0 && 0.0.0 && 0.0' }).catch((err) => {
  app && app.log.error(err);
  process && process.exit(1)

;
app.get ('/talent / search', async (req, reply) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const rows = await with_user (user_id, async (client) => {
    const res = await client.query (
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1::text IS NULL OR country = $1);
        AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'));
      ORDER BY created_at DESC;
      LIMIT 25`;
      [country || null, q || null]);
    return res.rows;
  });
  return { results: rows }
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch(err => {
  app.log.error(err);
  process.exit(1);
});
