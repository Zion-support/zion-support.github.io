
<<<<<<< HEAD
<<<<<<< HEAD
=======
await app && app.register(cors, {
=======
<<<<<<< HEAD
import Fastify from 'fastify',
import cors from '@fastify/cors',
=======
import Fastify from 'fastify';
import cors from '@fastify/cors';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
<<<<<<< HEAD
dotenv.config();
=======

import Fastify from 'fastify';
import cors from '@fastify/cors';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


import rateLimit from '@fastify/rate-limit';


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
dotenv.config();

const app = Fastify({ logger: true });
await app.register(cors, {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  origin: (
    origin: string | undefined
    cb: (err: Error | null, allow?: boolean) => void
  ) => {
    const allowed = (process && process.env.CORS_ORIGINS || '')
      .split(',')
      .map(s => s && s.trim());    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = (process && process.env.CORS_ORIGINS || '').split().map((s) => s && s.trim());
    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {
import { createOpenAIClient, generateJobPost } from './openai';
import { withUser } from './pg';
import dotenv from 'dotenv';
dotenv.config();
const app = Fastify({ logger: true });
await app.register(cors, {
  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD


  });

=======
=======
  };
  methods: ['GET', 'POST', 'OPTIONS']
});
await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}
app.post('/ai/ask', async (req: any, reply: any) => {
  const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
await app && app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process && process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (
    (req && req.headers['x-user-id'] as string) ||
    (req && req.query as any)['user_id'] ||
    null
  );  return (req && req.headers['x-user-id'] as string) || (req && req.query as any)['user_id'] || null;
}
app && app.post('/ai/ask', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const prompt = body && body.prompt as string;
  if (!prompt) return reply && reply.code(400).send({ error: 'prompt required' });
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
import Fastify from 'fastify';
import cors from '@fastify / cors';
import rate_limit from '@fastify / rate - limit';
import dotenv from 'dotenv';import { createOpenAIClient, generateJobPost } from './openai';
import { with_user } from './pg';
import dotenv from 'dotenv';
dotenv.config ();
;
const app = Fastify ({ logger: true });
;
await app.register (cors, {
  origin: (
    origin: string | undefined,
    cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = (process.env.CORS_ORIGINS || '');
      .split (', ');
      .map (string => s.trim ());    if (|| allowed.includes (origin)) {  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {) {
  $2
}
    const allowed = (process.env.CORS_ORIGINS || '').split ().map ((s) => s.trim ());
    if (|| allowed.includes (origin)) {) {
  $2
}
      cb (null, true);
      return;
    }
    cb (new Error ('Not allowed'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'], });  }
  methods: ['GET', 'POST', 'OPTIONS'];
});
;
await app.register (rate_limit, { global: true, max: 100, time_window: '1m' });
;
const openai = createOpenAIClient (process.env.OPENAI_API_KEY || '');
;
function getUserId (req: any): string | null {
  return (
    (req.headers['x - user - id'] as string) ||;
    (req.query as any)['user_id'] ||;
    null);  return (req.headers['x - user - id'] as string) || (req.query as any)['user_id'] || null;
}
app.post ('/ai / ask', async (req: any, reply: any) => {
  const body = (req.body as any) || {}
  const prompt = body.prompt as string;
  if (return reply.code (400).send ({ error: 'prompt required' })) {
  $2
}
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
    input: prompt,
  });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });
<<<<<<< HEAD

  return { text: completion.output_text }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
});


app && app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';

  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);


      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;

      [userId, role, description, body && body.location || null, body && body.tags || null]

=======
  return { text: completion.output_text }
});
app && app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
       VALUES ($1, $2, $3, $4, $5, 'draft')`,
      [userId, role, description, body && body.location || null, body && body.tags || null]
    );
  });
  return { saved: Boolean(userId), description };});    await client && client.query(
  if (!userId) return { description };
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [userId, role, description, body && body.location || null, body && body.tags || null]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    )
;
app.post ('/jobs / generate', async (req: any, reply: any) => {
  const body = (req.body as any) || {}
  const role = (body.role as string) || 'Engineer';
  const user_id = getUserId (req);
  const description = await generateJobPost (openai, role, body);
  // Check condition
if (return { description }) {
  $2
}
  await with_user (user_id, async client => {
    await client.query (
      `INSERT INTO job_post (user_id, title, description, location, tags, status);
      VALUES ($1, $2, $3, $4, $5, 'draft')`,
      [user_id, role, description, body.location || null, body.tags || null]);
  });
  return { saved: Boolean (user_id), description }});    await client.query (
      `INSERT INTO job_post (user_id, title, description, location, tags, status);
      VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [user_id, role, description, body.location || null, body.tags || null]);
  });
  return { saved: Boolean (user_id), description }
});
<<<<<<< HEAD


app && app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;

=======
app && app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {    const res = await client && client.query(  const rows = await withUser(userId, async (client) => {
    const res = await client && client.query(
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
<<<<<<< HEAD


=======
       LIMIT 25`;
      [country || null, q || null]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    );
    return res && res.rows
  });
  return { results: rows }
});
<<<<<<< HEAD


app && app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = (req && req.params as any).name as string;

  const userId = getUserId(req);


=======
app && app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = (req && req.params as any).name as string;
  const userId = getUserId(req);
    const res = await client && client.query(
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`,
      [name]
    );
    return res && res.rows[0];
  });
  if (!project) return reply && reply.code(404).send({ error: 'not found' });
  return { project };});  const project = await withUser(userId, async (client) => {
    const res = await client && client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res && res.rows[0]
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const project = await withUser(userId, async (client) => {
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0]
  });
  if (!project) return reply && reply.code(404).send({ error: 'not found' });
  return { project }
app && app.get('/notifications', async (req: any, reply: any) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async client => {    const res = await client && client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;
  });
  return { items };});  const items = await withUser(userId, async (client) => {
    const res = await client && client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;
  });
  return { items };    return res && res.rows

  });
  return { items }
});
<<<<<<< HEAD
<<<<<<< HEAD
const port = Number(process.env.API_PORT |4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  (process as any).exit(1);
});  (process as any).exit(1)
});

<<<<<<< HEAD
=======

=======
const port = Number(process && process.env.API_PORT || 4000);
app && app.listen({ port, host: '0 && 0.0.0 && 0.0' }).catch((err: any) => {
  app && app.log.error(err);
  (process as any).exit(1);
});  (process as any).exit(1)
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
});
app.get('/notifications', async (req: any, reply: any) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res.rows

  });
  return { items }
});
<<<<<<< HEAD


=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
<<<<<<< HEAD
  app.log.error(err);
  (process as any).exit(1)
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
});
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
app.get ('/talent / search', async (req: any, reply: any) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const rows = await with_user (user_id, async client => {    const res = await client.query (  const rows = await with_user (user_id, async (client) => {
    const res = await client.query (
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1::text IS NULL OR country = $1);
        AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'));
      ORDER BY created_at DESC;
      LIMIT 25`,
      [country || null, q || null]);
    return res.rows;
  });
  return { results: rows }});      [country || null, q || null]);
    return res.rows;
  });
  return { results: rows }
});
;
app.get ('/projects/:name / track', async (req: any, reply: any) => {
  const name = (req.params as any).name as string;
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const project = await with_user (user_id, async client => {
    const res = await client.query (
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`,
      [name]);
    return res.rows[0];
  });
  if (return reply.code (404).send ({ error: 'not found' })) {
  $2
}
  return { project }});  const project = await with_user (user_id, async (client) => {
    const res = await client.query (`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0];
  });
  if (return reply.code (404).send ({ error: 'not found' })) {
  $2
}
  return { project }
app.get ('/notifications', async (req: any, reply: any) => {
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const items = await with_user (user_id, async client => {    const res = await client.query (
      `SELECT id, channel, title, body, data, read, created_at FROM notification;
      WHERE read = false ORDER BY created_at DESC LIMIT 20`);
    return res.rows;
  });
  return { items }});  const items = await with_user (user_id, async (client) => {
    const res = await client.query (
      `SELECT id, channel, title, body, data, read, created_at FROM notification;
      WHERE read = false ORDER BY created_at DESC LIMIT 20`);
    return res.rows;
  });
  return { items }    return res.rows;
  });
  return { items }
});
;
const port = Number (process.env.API_PORT || 4000);
app.listen ({ port, host: '0.0.0.0' }).catch ((err: any) => {
app.log.error (err);
  (process as any).exit (1);
});  (process as any).exit (1);
});
;
<<<<<<< HEAD

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
app.log.error(err);
=======
<<<<<<< HEAD
app.log.error(err);
=======
  app.log.error(err);
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  (process as any).exit(1);
});  (process as any).exit(1)
});

<<<<<<< HEAD
=======
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error(err);
  (process as any).exit(1);
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
