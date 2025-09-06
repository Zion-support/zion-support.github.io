<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import dotenv from 'dotenv';

import { createOpenAIClient, generateJobPost } from './openai ;
import { getPool, withUser } from './pg ;

dotenv && dotenv.config();

const app = Fastify({ logger: true });

await app && app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process && process.env.CORS_ORIGINS || '')
      .split(',')
      .map(s => s && s.trim());
    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {

=======
<<<<<<< HEAD
import { createOpenAIClient, generateJobPost } from './openai ;
import { getPool, withUser } from './pg ;
dotenv && dotenv.config();
const app = Fastify({ logger: true });
await app && app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process && process.env.CORS_ORIGINS || '')
      .split(',')
      .map(s => s && s.trim());
    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit',
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost  } from './openai.js';
import { getPool, withUser } from './pg.js';
dotenv.config();

const app = Fastify({ logger: true });
await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS |'')
      .split(',')
      .map(s => s.trim());
    if (!origin |allowed.includes('*') |allowed.includes(origin)) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD

  },
  methods: ['GET', 'POST', 'OPTIONS'],});    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
  },
  methods: ['GET', 'POST', 'OPTIONS'],});    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
=======
  }
  methods: ['GET', 'POST', 'OPTIONS'],});    if (!origin |allowed.includes('*') |allowed.includes(origin)) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      cb(null, true);
      return
    }
    cb(new Error('Not allowed'), false)
  }
  methods: ['GETPOSTOPTIONS']
});
<<<<<<< HEAD


await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });

const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');

function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}


=======
await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
<<<<<<< HEAD
const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
=======
const openai = createOpenAIClient(process.env.OPENAI_API_KEY |'');
function getUserId(req: any): string | null {
  return (
    (req.headers['x-user-id'] as string) |
    (req.query as any)['user_id'] |
    null
  );  return (req.headers['x-user-id'] as string) |(req.query as any)['user_id'] |null;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
app.post('/ai/ask', async (req, reply) => {
  const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
await app && app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process && process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (
    (req && req.headers['x-user-id'] as string) ||
    (req && req.query as any)['user_id'] ||
    null
  );  return (req && req.headers['x-user-id'] as string) || (req && req.query as any)['user_id'] || null;
}
app && app.post('/ai/ask', async (req, reply) => {
  const body = (req && req.body as any) || {};
  const prompt = body && body.prompt as string;
  if (!prompt) return reply && reply.code(400).send({ error: 'prompt required' });
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
import Fastify from 'fastify';
import cors from '@fastify / cors';
import rate_limit from '@fastify / rate - limit';
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost } from './openai.js';
import { get_pool, with_user } from './pg.js';
;
dotenv.config ();
;
const app = Fastify ({ logger: true });
;
await app.register (cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS || '');
      .split (', ');
      .map (string => s.trim ());
    if (|| allowed.includes (origin)) {) {
  $2
}
      cb (null, true);
      return;
    }
    cb (new Error ('Not allowed'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'], });    if (|| allowed.includes (origin)) {) {
  $2
}
      cb (null, true);
      return;
    }
    cb (new Error ('Not allowed'), false);
  }
  methods: ['GETPOSTOPTIONS'];
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
app.post ('/ai / ask', async (req, reply) => {
  const body = (req.body as any) || {}
  const prompt = body.prompt as string;
  if (return reply.code (400).send ({ error: 'prompt required' })) {
  $2
}
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    input: prompt,
  });
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });
<<<<<<< HEAD

  return { text: completion.output_text }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
});


app && app.post('/jobs/generate', async (req, reply) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';

  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
=======
  return { text: completion.output_text }
});
app && app.post('/jobs/generate', async (req, reply) => {
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
    )
;
app.post ('/jobs / generate', async (req, reply) => {
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
app && app.get('/talent/search', async (req, reply) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {
    const res = await client && client.query(
=======
  const completion = await openai.responses.create({
    model: 'gpt-4o-mini'
    input: prompt
  });
  return { text: completion.output_text };});  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }
});
app.post('/jobs/generate', async (req, reply) => {
  const body = (req.body as any) |{}
  const role = (body.role as string) |'Engineer';
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
  if (!userId) return { description }
  await withUser(userId, async client => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`
      [userId, role, description, body.location |null, body.tags |null]
    );
  });
  return { saved: Boolean(userId), description };});    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [userId, role, description, body.location |null, body.tags |null]
    )
  });
  return { saved: Boolean(userId), description }
});
app.get('/talent/search', async (req, reply) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {
    const res = await client.query(
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`,  const rows = await withUser(userId, async (client) => {
<<<<<<< HEAD
    const res = await client && client.query(
=======
    const res = await client.query(
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`
      [country |null, q |null]
    );
<<<<<<< HEAD
    return res && res.rows;
  });
  return { results: rows };});      [country |null, q |null]
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
const app = Fastify({ logger: true })

await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim())
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb(null, true),
      return
    }
    cb(new Error('Not allowed'), false)
  },
  methods: ['GETPOSTOPTIONS']
}),

await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' }),

const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '')

function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null
}

app.post('/ai/ask', async (req, reply) => {
  const body = (req.body as any) || {}
  const prompt = body.prompt as string
  if (!prompt) return reply.code(400).send({ error: 'prompt required' }),
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt }),
  return { text: completion.output_text }
}),

app.post('/jobs/generate', async (req, reply) => {
  const body = (req.body as any) || {}
  const role = (body.role as string) || 'Engineer'
  const userId = getUserId(req)
  const description = await generateJobPost(openai, role, body),
  if (!userId) return { description },
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`,
      [userId, role, description, body.location || null, body.tags || null]
    )
  }),
  return { saved: Boolean(userId), description }
}),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


<<<<<<< HEAD
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;

      [userId, role, description, body && body.location || null, body && body.tags || null]

    )
=======
;
app.post ('/jobs / generate', async (req, reply) => {
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  });
  return { saved: Boolean (user_id), description }
});


app && app.get('/talent/search', async (req, reply) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;

  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {
    const res = await client && client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`,  const rows = await withUser(userId, async (client) => {
    const res = await client && client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`
      [country |null, q |null]
    );
    return res && res.rows;
  });

  return { results: rows };});      [country |null, q |null]
=======
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
=======
const _openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');

function getUserId(_req: unknown): string | null {_return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;}

app.post(_'/ai/ask', _async (req, _reply) => {_const _body = (req.body as any) || {};
  const _prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({_error: 'prompt required'});
  const _completion = await openai.responses.create({_model: 'gpt-4o-mini', _input: prompt});
  return {_text: completion.output_text};
});

app.post(_'/jobs/generate', _async (req, _reply) => {_const _body = (req.body as any) || {};
  const _role = (body.role as string) || 'Engineer';
  const _userId = getUserId(req);
  const _description = await generateJobPost(openai, role, body);
  if (!userId) return {_description};
  await withUser(_userId, _async (client) => {_await client.query(
      `INSERT INTO job_post (user_id, _title, _description, _location, _tags, _status)
       VALUES ($1, _$2, _$3, _$4, _$5, _'draft')`, _[userId, _role, _description, _body.location || null, _body.tags || null]
    );});
  return {_saved: Boolean(userId), _description};
});

app.get(_'/talent/search', _async (req, _reply) => {_const _q = (req.query as any).q as string;
  const _country = (req.query as any).country as string | undefined;
  const _userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized'});
  const _rows = await withUser(_userId, _async (client) => {_const _res = await client.query(
      `SELECT id, _full_name, _country, _skills, _experience_years FROM talent_profile

       WHERE ($1::text IS NULL OR country = $1)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
           ))
       ORDER BY created_at DESC
LIMIT 25`;
      [country || null, q || null]
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    );
    return res && res.rows
  });
  return { results: rows }
});
<<<<<<< HEAD


app && app.get('/projects/:name/track', async (req, reply) => {
  const name = (req && req.params as any).name as string;

  const userId = getUserId(req);


=======
app && app.get('/projects/:name/track', async (req, reply) => {
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
app && app.get('/notifications', async (req, reply) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async client => {    const res = await client && client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;  const items = await withUser(userId, async (client) => {
    const res = await client && client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;
});
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
app.get('/notifications', async (req, reply) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
<<<<<<< HEAD

<<<<<<< HEAD
    );

=======
  return { items }
});


=======
);
    return res.rows
=======
    return res.rows;
  });
  return { results: rows };});      [country |null, q |null]
    );
    return res.rows
  });
  return { results: rows }
});
app.get('/projects/:name/track', async (req, reply) => {
  const name = (req.params as any).name as string;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const project = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`
      [name]
    );
    return res.rows[0];
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project };});  const project = await withUser(userId, async (client) => {
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0]
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project }
app.get('/notifications', async (req, reply) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async client => {    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res.rows;  const items = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res.rows;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  });
  return { items }
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const port = Number(process && process.env.API_PORT || 4000);
app && app.listen({ port, host: '0 && 0.0.0 && 0.0' }).catch(err => {
  app && app.log.error(err);
  process && process.exit(1);
});  });
  return { items }
});
<<<<<<< HEAD

=======

    );

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
app.get ('/talent / search', async (req, reply) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const rows = await with_user (user_id, async client => {
    const res = await client.query (
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1::text IS NULL OR country = $1)         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'));
      ORDER BY created_at DESC;
      LIMIT 25`,  const rows = await with_user (user_id, async (client) => {
    const res = await client.query (
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1: :text IS NULL OR country = $1);
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
<<<<<<< HEAD
<<<<<<< HEAD
;
app.get ('/projects/:name / track', async (req, reply) => {
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
app.get ('/notifications', async (req, reply) => {
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const items = await with_user (user_id, async client => {    const res = await client.query (
      `SELECT id, channel, title, body, data, read, created_at FROM notification;
      WHERE read = false ORDER BY created_at DESC LIMIT 20`);
    return res.rows;  const items = await with_user (user_id, async (client) => {
    const res = await client.query (
      `SELECT id, channel, title, body, data, read, created_at FROM notification;
      WHERE read = false ORDER BY created_at DESC LIMIT 20`);
    return res.rows;
  });
  return { items }
});
;
const port = Number (process.env.API_PORT || 4000);
app.listen ({ port, host: '0.0.0.0' }).catch (err => {
  app.log.error (err);
  process.exit (1);
});  });
  return { items }
});
;
const port = Number (process.env.API_PORT || 4000);
app.listen ({ port, host: '0.0.0.0' }).catch ((err) => {
  app.log.error (err);
  process.exit (1);
});
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

    );
    );
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
