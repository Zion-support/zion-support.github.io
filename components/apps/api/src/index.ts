>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';


=======
import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit',
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';import dotenv from 'dotenv';

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

const app = Fastify({ logger: true });
await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS |'')
      .split(',')
      .map(s => s.trim());
    if (!origin |allowed.includes('*') |allowed.includes(origin)) {
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'],});    if (!origin || allowed && allowed.includes('*') || allowed && allowed.includes(origin)) {

await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });

const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');

function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    return res && res.rows
  });
  return { results: rows }
});

app && app.get('/projects/:name/track', async (req, reply) => {
  const name = (req && req.params as any).name as string;

  const userId = getUserId(req);


app.get('/notifications', async (req, reply) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return { items }
});


=======

=======    );
=======
    );
    );
=======
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
;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
