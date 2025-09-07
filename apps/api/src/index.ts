import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
dotenv.config($2);
const app = Fastify($2);
await app.register(cors, {
  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = $2;
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb($2);
      return
    }
    cb(new Error('Not allowed'), false)
  },
  methods: ['GETPOSTOPTIONS']
}),

await app.register($2);
const openai = createOpenAIClient($2);
function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null
}
app.post('/ai/ask', async (req: any, reply: any) => {
  const body = $2;
  const prompt = $2;
  if (!prompt) return reply.code(400).send($2);
  const completion = await openai.responses.create($2);
  return { text: completion.output_text }
}),

app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = $2;
  const role = $2;
  const userId = getUserId($2);
  const description = await generateJobPost($2);
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

app.get('/talent/search', async (req: any, reply: any) => {
  const q = $2;
  const country = $2;
  const userId = getUserId($2);
  if (!userId) return reply.code(401).send($2);
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $2;
      [country || null, q || null]
    ),
    return res.rows
  }),
  return { results: rows}
}),

app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = $2;
  const userId = getUserId($2);
  if (!userId) return reply.code(401).send($2);
  const project = await withUser(userId, async (client) => {
    const res = await client.query($2);
    return res.rows[0]
  }),
  if (!project) return reply.code(404).send($2);
  return { project }
}),

app.get('/notifications', async (req: any, reply: any) => {
  const userId = getUserId($2);
  if (!userId) return reply.code(401).send($2);
  const items = await withUser(userId, async (client) => {
    const res = await client.query($2);
    return res.rows
  }),
  return { items }
}),

const port = Number($2);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error($2);
  (process as any).exit(1)
}),