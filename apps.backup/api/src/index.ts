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
    const allowed = null;
const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}

app.post('/ai/ask', async (req, reply) => {
  const body = null;
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
  process.exit(1)
});