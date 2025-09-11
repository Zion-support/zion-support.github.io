<<<<<<< HEAD
<<<<<<< HEAD
await app && app.register(cors, {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Fastify from 'fastify',
import cors from '@fastify/cors',
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import Fastify from 'fastify';
import cors from '@fastify/cors';
=======
dotenv.config();
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import rateLimit from '@fastify/rate-limit';


const app = Fastify({ logger: true });
await app.register(cors, {
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD
<<<<<<< HEAD
  };
  methods: ['GET', 'POST', 'OPTIONS']
=======


  });

=======
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });

  return { text: completion.output_text }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
});


app && app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';

  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);


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
});


<<<<<<< HEAD
  });

=======
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
app && app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {    const res = await client && client.query(  const rows = await withUser(userId, async (client) => {
    const res = await client && client.query(
<<<<<<< HEAD
=======

=======
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
<<<<<<< HEAD
       LIMIT 25`;
      [country || null, q || null]
=======


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    );
    return res && res.rows
  });
  return { results: rows }
});
<<<<<<< HEAD
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
=======


});

  const userId = getUserId(req);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  (process as any).exit(1);
});  (process as any).exit(1)
});


<<<<<<< HEAD
const port = Number(process && process.env.API_PORT || 4000);
app && app.listen({ port, host: '0 && 0.0.0 && 0.0' }).catch((err: any) => {
  app && app.log.error(err);
  (process as any).exit(1);
});  (process as any).exit(1)
});
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
=======
=======


const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
<<<<<<< HEAD
  app.log.error(err);
  (process as any).exit(1)
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
});

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        AND ($2::text IS NULL OR EXISTS ('
              SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'));
      ORDER BY created_at DESC;`
      LIMIT 25`,
      [country || null, q || null]);
    return res.rows;
  });
  return { results: rows }});      [country || null, q || null]);
    return res.rows;
  });
  return { results: rows }
});
;'
app.get ('/projects/:name / track', async (req: any, reply: any) => {}
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
=======
    );
    return res && res.rows
  });
  return { results: rows }
});
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


app && app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = (req && req.params as any).name as string;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const userId = getUserId(req);


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

  (process as any).exit(1);
});  (process as any).exit(1)
});


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


=======


const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
