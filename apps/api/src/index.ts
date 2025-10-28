import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost } from './openai';
import { withUser } from './pg';
import dotenv from 'dotenv';

dotenv.config();

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = (process.env.CORS_ORIGINS || '').split(',').map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
  }
});

app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';
  const userId = 'user123'; // Mock user ID

  try {
    const client = createOpenAIClient();
    const jobPost = await generateJobPost(client, role);
    
    reply.send({ jobPost });
  } catch (error) {
    reply.status(500).send({ error: 'Failed to generate job post' });
  }
});

const start = async () => {
  try {
    await app.listen({ port: 3001, host: '0.0.0.0' });
    console.log('Server listening on port 3001');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();