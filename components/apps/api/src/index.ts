import Fastify from 'fastify'
import cors from '@fastify/cors'
import rateLimit from '@fastify/rate-limit'
import dotenv from 'dotenv'
import { createOpenAIClient, generateJobPost } from './openai.js',
import { getPool, withUser } from './pg.js',

dotenv.config(),


dotenv.config(),

>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
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

app.get('/talent/search', async (req, reply) => {
  const q = (req.query as any).q as string
  const country = (req.query as any).country as string | undefined
  const userId = getUserId(req)
  if (!userId) return reply.code(401).send({ error: 'unauthorized' }),
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
await app.register(rateLimit, {_global: true, _max: 100, _timeWindow: '1m'});

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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`,
      [country || null, q || null]
    ),
    return res.rows
  }),
  return { results: rows }
}),

app.get('/projects/:name/track', async (req, reply) => {
  const name = (req.params as any).name as string
  const userId = getUserId(req)
  if (!userId) return reply.code(401).send({ error: 'unauthorized' }),
  const project = await withUser(userId, async (client) => {
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]),
    return res.rows[0]
  }),
  if (!project) return reply.code(404).send({ error: 'not found' }),
  return { project }
}),

app.get('/notifications', async (req, reply) => {
  const userId = getUserId(req)
  if (!userId) return reply.code(401).send({ error: 'unauthorized' }),
  const items = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    ),
    return res.rows
  }),
  return { items }
}),
