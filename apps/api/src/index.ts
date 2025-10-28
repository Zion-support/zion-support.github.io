import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost } from './openai';
import { withUser } from './pg';
import dotenv from 'dotenv';

dotenv && dotenv.config();
import Fastify from 'fastify'
import cors from '@fastify/cors'
import rateLimit from '@fastify/rate-limit'
import { createOpenAIClient, generateJobPost } from './openai'
import { withUser } from './pg'
import dotenv from 'dotenv'
dotenv.config()
    await client.query (
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
      VALUES ($1, $2, $3, $4, $5, 'draft')`
      [user_id, role, description, body.location || null, body.tags || null])
  })
  return { saved: Boolean (user_id), description }
})
app && app.get('/talent/search', async (req: any, reply: any) => {
    // Empty block
  });      return res && res.rows
  })
  return { items }
})
  (process as any).exit(1)
})
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`,
      [country || null, q || null]
    )
    return res.rows
  })
  return { results: rows }
})
app.get('/projects/:name/track', async (req: any, reply: any) => {
  