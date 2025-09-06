<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Fastify from 'fastify',
import cors from '@fastify/cors',
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Fastify from 'fastify';
import cors from '@fastify/cors';

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
dotenv.config();

const app = Fastify({ logger: true });
await app.register(cors, {

<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit';
const app = null;
    cb: (err: Error | null, allow?: boolean) => void
  ) => {
    const allowed = (process.env.CORS_ORIGINS |'')
      .split(',')
      .map(s => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


  });

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });

  return { text: completion.output_text }
origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
},
  methods: ['GET', 'POST', 'OPTIONS'],
});
await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process.env.OPENAI_API_KEY |'');
function getUserId(req: any): string | null {
return (
    (req.headers['x-user-id'] as string) ||
    (req.query as any)['user_id'] ||
    null
  );

app.post('/ai/ask', async (req: any, reply: any) => {
  const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return { text: completion.output_text };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
});

app && app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';

  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
<<<<<<< HEAD
<<<<<<< HEAD

      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;

      [userId, role, description, body && body.location || null, body && body.tags || null]

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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (!userId) return { description };
await withUser(userId, async client => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`
      [userId, role, description, body.location |null, body.tags |null]
    );
  });
  return { saved: Boolean(userId), description };
origin/cursor/automate-test-improve-and-merge-code-2533
});
<<<<<<< HEAD
=======


app && app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {    const res = await client && client.query(  const rows = await withUser(userId, async (client) => {
    const res = await client && client.query(
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const rows = await withUser(userId, async client => {
origin/cursor/automate-test-improve-and-merge-code-2533
    const res = await client.query(

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    );
    return res && res.rows
  });
  return { results: rows }
LIMIT 25`,
      [country || null, q || null]
    );
    return res.rows;
  });
  return { results: rows };
origin/cursor/automate-test-improve-and-merge-code-2533
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


app && app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = (req && req.params as any).name as string;

  const userId = getUserId(req);
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD

  });
  return { items }
});
const port = Number(process.env.API_PORT |4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
app.log.error(err);
app.log.error(err);
  app.log.error(err);
=======
app.log.error(err);
  app.log.error(err);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  (process as any).exit(1);
});  (process as any).exit(1)
});
=======

});
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
});});

<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508


const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
<<<<<<< HEAD

  (process as any).exit(1);
});  (process as any).exit(1)
});
<<<<<<< HEAD
});

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const project = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`
      [name]
    );
    return res.rows[0];
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project };
});

app.get('/notifications', async (req: any, reply: any) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const items = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
return res.rows;
  });
  return { items };
});
const port = Number(process.env.API_PORT |4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error(err);
(process as any).exit(1);
});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
