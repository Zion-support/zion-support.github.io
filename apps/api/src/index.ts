import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost } from './openai';
import { withUser } from './pg';
import dotenv from 'dotenv';

dotenv.config();

const app = Fastify({ logger: true });

// Register CORS
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

// Register rate limiting
await app.register(rateLimit, { 
  global: true, 
  max: 100, 
  timeWindow: '1m' 
});

const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');

function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}

// AI Ask endpoint
app.post('/ai/ask', async (req: any, reply: any) => {
  const body = (req.body as any) || {};
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
  
  try {
    const completion = await openai.responses.create({ 
      model: 'gpt-4o-mini', 
      input: prompt 
    });
    return { text: completion.output_text };
  } catch (error) {
    console.error('OpenAI API error:', error);
    return reply.code(500).send({ error: 'AI service unavailable' });
  }
});

// Job generation endpoint
app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req.body as any) || {};
  const role = (body.role as string) || 'Engineer';
  const userId = getUserId(req);
  
  try {
    const description = await generateJobPost(openai, role, body);
    
    if (!userId) return { description };
    
    await withUser(userId, async (client) => {
      await client.query(
        `INSERT INTO job_post (user_id, title, description, location, tags, status)
         VALUES ($1, $2, $3, $4, $5, 'draft')`,
        [userId, role, description, body.location || null, body.tags || null]
      );
    });
    
    return { saved: Boolean(userId), description };
  } catch (error) {
    console.error('Job generation error:', error);
    return reply.code(500).send({ error: 'Job generation failed' });
  }
});

// Talent search endpoint
app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const userId = getUserId(req);
  
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  
  try {
    const rows = await withUser(userId, async (client) => {
      const res = await client.query(
        `SELECT id, full_name, country, skills, experience_years FROM talent_profile
         WHERE ($1::text IS NULL OR country = $1)
           AND ($2::text IS NULL OR EXISTS (
                SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
             ))
         ORDER BY created_at DESC
         LIMIT 25`,
        [country || null, q || null]
      );
      return res.rows;
    });
    
    return { results: rows };
  } catch (error) {
    console.error('Talent search error:', error);
    return reply.code(500).send({ error: 'Search failed' });
  }
});

// Project tracking endpoint
app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = (req.params as any).name as string;
  const userId = getUserId(req);
  
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  
  try {
    const project = await withUser(userId, async (client) => {
      const res = await client.query(
        `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, 
        [name]
      );
      return res.rows[0];
    });
    
    if (!project) return reply.code(404).send({ error: 'not found' });
    
    return { project };
  } catch (error) {
    console.error('Project tracking error:', error);
    return reply.code(500).send({ error: 'Project tracking failed' });
  }
});

// Notifications endpoint
app.get('/notifications', async (req: any, reply: any) => {
  const userId = getUserId(req);
  
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  
  try {
    const items = await withUser(userId, async (client) => {
      const res = await client.query(
        `SELECT id, channel, title, body, data, read, created_at FROM notification
         WHERE read = false ORDER BY created_at DESC LIMIT 20`
      );
      return res.rows;
    });
    
    return { items };
  } catch (error) {
    console.error('Notifications error:', error);
    return reply.code(500).send({ error: 'Notifications failed' });
  }
});

// Health check endpoint
app.get('/health', async (req: any, reply: any) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Start server
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error(err);
  process.exit(1);
});