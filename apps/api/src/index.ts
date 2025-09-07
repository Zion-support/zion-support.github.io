import { FastifyInstance } from 'fastify';

// Mock functions for demonstration
function getUserId(req: any): string | null {
  return req.headers['user-id'] || null;
}

// eslint-disable-next-line no-unused-vars
async function withUser(userId: string, callback: (client: any) => Promise<any>): Promise<any> {
  // Mock database client
  const client = {
    // eslint-disable-next-line no-unused-vars
    query: async (_sql: string, _params: any[]) => {
      return { rows: [] };
    }
  };
  // Pass client to callback function
  return await callback(client);
}

// eslint-disable-next-line no-unused-vars
async function generateJobPost(_openai: any, role: string, _body: any): Promise<string> {
  return `Job posting for ${role} position`;
}

export default async function routes(app: FastifyInstance) {
  // CORS configuration
  app.register(require('@fastify/cors'), {
    origin: (origin: string, callback: Function) => {
      // Allow all origins for development
      callback(null, true);
    }
  });

  // Job generation endpoint
  app.post('/jobs/generate', async (req: any, reply: any) => {
    try {
      const body = req.body as any || {};
      const role = (body.role as string) || 'Engineer';
      const userId = getUserId(req);
      
      if (!userId) {
        return reply.code(401).send({ error: 'unauthorized' });
      }

      const description = await generateJobPost(null, role, body);
      
      await withUser(userId, async (client) => {
        await client.query(
          `INSERT INTO job_post (user_id, title, description, location, tags, status) VALUES ($1, $2, $3, $4, $5, 'draft')`,
          [userId, role, description, body.location || null, body.tags || null]
        );
      });

      return { saved: Boolean(userId), description };
    } catch (error) {
      app.log.error(error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Talent search endpoint
  app.get('/talent/search', async (req: any, reply: any) => {
    try {
      const q = (req.query as any).q as string;
      const country = (req.query as any).country as string | undefined;
      const userId = getUserId(req);
      
      if (!userId) {
        return reply.code(401).send({ error: 'unauthorized' });
      }

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
      app.log.error(error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Project tracking endpoint
  app.get('/projects/:name/track', async (req: any, reply: any) => {
    try {
      const name = (req.params as any).name as string;
      const userId = getUserId(req);
      
      if (!userId) {
        return reply.code(401).send({ error: 'unauthorized' });
      }

      const project = await withUser(userId, async (client) => {
        const res = await client.query(
          `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`,
          [name]
        );
        return res.rows[0];
      });

      if (!project) {
        return reply.code(404).send({ error: 'not found' });
      }

      return { project };
    } catch (error) {
      app.log.error(error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Notifications endpoint
  app.get('/notifications', async (req: any, reply: any) => {
    try {
      const userId = getUserId(req);
      
      if (!userId) {
        return reply.code(401).send({ error: 'unauthorized' });
      }

      const items = await withUser(userId, async (client) => {
        const res = await client.query(
          `SELECT id, channel, title, body, data, read, created_at FROM notification
           WHERE read = false ORDER BY created_at DESC LIMIT 20`
        );
        return res.rows;
      });

      return { items };
    } catch (error) {
      app.log.error(error);
      return reply.code(500).send({ error: 'Internal server error' });
    }
  });

  // Error handling
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error);
    reply.code(500).send({ error: 'Internal server error' });
  });
}