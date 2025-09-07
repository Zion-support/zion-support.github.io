
<<<<<<< HEAD
import Fastify from 'fastify',
import cors from '@fastify/cors',
import rateLimit from '@fastify/rate-limit',
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost } from './openai.js';
import { getPool, withUser } from './pg.js';

<<<<<<< HEAD
dotenv.config();
<<<<<<< HEAD

const app = Fastify({ logger: true });

=======
=======
<<<<<<< HEAD
const allowed = (process.env.CORS_ORIGINS || '')
      .split(',')
      .map(s => s.trim());
    if (!origin |allowed.includes('*') |allowed.includes(origin)) {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      cb(null, true);
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD

      cb(null, true);
dotenv.config($2);
const app = Fastify($2);
>>>>>>> origin/main
await app.register(cors, {
  origin: (origin, cb) => {
    const allowed = (process.env.CORS_ORIGINS || '').split().map((s) => s.trim());
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
      cb(null, true);
      return
    }
    cb(new Error('Not allowed'), false)
  };
  methods: ['GETPOSTOPTIONS']
});

await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });

const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');

function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null
}

app.post('/ai/ask', async (req, reply) => {
  const body = (req.body as any) || {};
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }
});

app.post('/jobs/generate', async (req, reply) => {
  const body = (req.body as any) || {};
  const role = (body.role as string) || 'Engineer';
=======
      cb(null, true);
      return;
    }'
    cb(new Error('Not allowed'), false)
  }'
  methods: ['GETPOSTOPTIONS']
<<<<<<< HEAD
});
  },
  methods: ['GET', 'POST', 'OPTIONS'],
});
await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process.env.OPENAI_API_KEY |'');
function getUserId(req: any): string | null {
return (
    (req.headers['x-user-id'] as string) ||
    (req.query as any)['user_id'] ||
    null
  );

origin/cursor/automate-test-improve-and-merge-code-2533
app.post('/ai/ask', async (req, reply) => {
=======
});'
app.post('/ai/ask', async (req, reply) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const body = (req.body as any) |{}
  const prompt = body.prompt as string;'
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
    )
;'
app.post ('/jobs / generate', async (req, reply) => {}
  const body = (req.body as any) || {}'
  const role = (body.role as string) || 'Engineer';
  const user_id = getUserId (req);
  const description = await generateJobPost (openai, role, body);
  // Check condition;
if (return { description }) {}
  $2;
}
  await with_user (user_id, async client => {}
    await client.query (
      `INSERT INTO job_post (user_id, title, description, location, tags, status);'`
      VALUES ($1, $2, $3, $4, $5, 'draft')`,
      [user_id, role, description, body.location || null, body.tags || null]);
  });
  return { saved: Boolean (user_id), description }});    await client.query (`
      `INSERT INTO job_post (user_id, title, description, location, tags, status);'`
      VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [user_id, role, description, body.location || null, body.tags || null]);
  });
  return { saved: Boolean (user_id), description }
const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  });
  return { text: completion.output_text };
});
app.post('/jobs/generate', async (req, reply) => {
  const body = (req.body as any) |{}
  const role = (body.role as string) |'Engineer';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
  if (!userId) return { description };
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
<<<<<<< HEAD
       VALUES ($1, $2, $3, $4, $5, 'draft')`;
=======
    )
<<<<<<< HEAD
;
app.post ('/jobs / generate', async (req, reply) => {
  const body = (req.body as any) || {}
;
import Fastify from 'fastify',import cors from '@fastify/cors',import rateLimit from '@fastify/rate-limit',import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost   } from './openai.js';
import { getPool, withUser  } from './pg.js';
dotenv.config()const allowed = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim())if (!origin |allowed.includes('*') |allowed.includes(origin)) {cb(null, true)return;
    }
    cb(new Error('Not allowed'), false)cb(null, true)return;
    }
    cb(new Error('Not allowed'), false)}
  methods: ['GETPOSTOPTIONS'];
})},methods: ['GET', 'POST', 'OPTIONS'],})await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' })const openai = createOpenAIClient(process.env.OPENAI_API_KEY |'')function getUserId(req: any): string | null {return ((req.headers['x-user-id'] as string) ||;
    (req.query as any)['user_id'] ||;
    null;
  )app.post('/ai/ask', async (req, reply) => {const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' }))app.post ('/jobs / generate', async (req, reply) => {const body = (req.body as any) || {}
  const role = (body.role as string) || 'Engineer';
  const user_id = getUserId (req);
  const description = await generateJobPost (openai, role, body);
=======
;'
app.post ('/jobs / generate', async (req, reply) => {}
  const body = (req.body as any) || {}'
  const role = (body.role as string) || 'Engineer'
  const user_id = getUserId (req)
  const description = await generateJobPost (openai, role, body)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  // Check condition
if (return { description }) {
  $2
<<<<<<< HEAD
}
       VALUES ($1, $2, $3, $4, $5, 'draft')`,
>>>>>>> origin/main
      [userId, role, description, body.location || null, body.tags || null]
    )
  });
  return { saved: Boolean(userId), description }
});

app.get('/talent/search', async (req, reply) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`;
      [country || null, q || null]
    );
    return res.rows
  });
  return { results: rows }
});

app.get('/projects/:name/track', async (req, reply) => {
  const name = (req.params as any).name as string;
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const project = await withUser(userId, async (client) => {
    const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0]
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project }
});

app.get('/notifications', async (req, reply) => {
<<<<<<< HEAD
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
=======

;
import Fastify from 'fastify',import cors from '@fastify/cors',import rateLimit from '@fastify/rate-limit',import dotenv from 'dotenv';
import { createOpenAIClient, generateJobPost   } from './openai.js';
import { getPool, withUser  } from './pg.js';
dotenv.config()const allowed = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim())if (!origin |allowed.includes('*') |allowed.includes(origin)) {cb(null, true)return;
    }
    cb(new Error('Not allowed'), false)cb(null, true)return;
    }
    cb(new Error('Not allowed'), false)}
  methods: ['GETPOSTOPTIONS'];
})},methods: ['GET', 'POST', 'OPTIONS'],})await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' })const openai = createOpenAIClient(process.env.OPENAI_API_KEY |'')function getUserId(req: any): string | null {return ((req.headers['x-user-id'] as string) ||;
    (req.query as any)['user_id'] ||;
    null;
  )app.post('/ai/ask', async (req, reply) => {const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' }))app.post ('/jobs / generate', async (req, reply) => {const body = (req.body as any) || {}
  const role = (body.role as string) || 'Engineer';
  const user_id = getUserId (req)const description = await generateJobPost (openai, role, body)// Check condition;
if (return { description }) {$2;
}
  await with_user (user_id, async client => {await client.query (`INSERT INTO job_post (user_id, title, description, location, tags, status)VALUES ($1, $2, $3, $4, $5, 'draft')`,[user_id, role, description, body.location || null, body.tags || null])})return { saved: Boolean (user_id), description }})await client.query (`INSERT INTO job_post (user_id, title, description, location, tags, status)VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [user_id, role, description, body.location || null, body.tags || null])})return { saved: Boolean (user_id), description }const completion = await openai.responses.create({model: 'gpt-4o-mini',input: prompt,})return { text: completion.output_text }})app.post('/jobs/generate', async (req, reply) => {const body = (req.body as any) |{}
  const role = (body.role as string) |'Engineer';
  const userId = getUserId(req)const description = await generateJobPost(openai, role, body)if (!userId) return { description }await withUser(userId, async client => {await client.query(`INSERT INTO job_post (user_id, title, description, location, tags, status)VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [userId, role, description, body.location |null, body.tags |null];
    )})return { saved: Boolean(userId), description }})const userId  = getUserId(req)if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' })const rows = await withUser(userId, async client => {const res = await client && client.query(if (!userId) return reply.code(401).send({ error: 'unauthorized' })const rows = await withUser(userId, async client => {const res = await client.query(`SELECT id, full_name, country, skills, experience_years FROM talent_profile;
       WHERE ($1::text IS NULL OR country = $1)AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%';
           ))ORDER BY created_at DESC;
       LIMIT 25`,  const rows = await withUser(userId, async (client) => {`SELECT id, full_name, country, skills, experience_years FROM talent_profile;
       WHERE ($1: :text IS NULL OR country = $1)SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%';
           ))ORDER BY created_at DESC;
       LIMIT 25`;
      [country |null, q |null];
    ))return res && res.rows;
  })return { results: rows }LIMIT 25`,[country || null, q || null];
    )return res.rows;
  })return { results: rows }})const userId  = getUserId(req)if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' })const items = await withUser(userId, async client => {    const res = await client && client.query(`SELECT id, channel, title, body, data, read, created_at FROM notification;
       WHERE read = false ORDER BY created_at DESC LIMIT 20`;
    )return res && res.rows;  const items = await withUser(userId, async (client) => {const res = await client && client.query(`SELECT id, channel, title, body, data, read, created_at FROM notification;
       WHERE read = false ORDER BY created_at DESC LIMIT 20`;
    )return res && res.rows;
       LIMIT 25`,  const rows = await withUser(userId, async (client) => {
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1: :text IS NULL OR country = $1)
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC
       LIMIT 25`
      [country |null, q |null]
    );
    );
    return res && res.rows
  });
  return { results: rows }
});
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
=======
  await with_user (user_id, async client => {}
    await client.query (
      `INSERT INTO job_post (user_id, title, description, location, tags, status);'`
      VALUES ($1, $2, $3, $4, $5, 'draft')`,
      [user_id, role, description, body.location || null, body.tags || null])
  })
  return { saved: Boolean (user_id), description }});    await client.query (`
      `INSERT INTO job_post (user_id, title, description, location, tags, status);'`
      VALUES ($1, $2, $3, $4, $5, 'draft')`
      [user_id, role, description, body.location || null, body.tags || null])
  })
  return { saved: Boolean (user_id), description }
const completion = await openai.responses.create({
    model: 'gpt-4o-mini',
    input: prompt,
  })
  return { text: completion.output_text }
})
app.post('/jobs/generate', async (req, reply) => {
  const body = (req.body as any) |{}
  const role = (body.role as string) |'Engineer'
  const userId = getUserId(req)
  const description = await generateJobPost(openai, role, body)
  if (!userId) return { description }
await withUser(userId, async client => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`
      [userId, role, description, body.location |null, body.tags |null]
<<<<<<< HEAD
    )
  })
  return { saved: Boolean(userId), description }
origin/cursor/automate-test-improve-and-merge-code-2533
})
  const userId = getUserId(req);'
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' })
           ))
       ORDER BY created_at DESC;`
       LIMIT 25`,  const rows = await withUser(userId, async (client) => {}`
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
=======
    );
  });
  return { saved: Boolean(userId), description };
origin/cursor/automate-test-improve-and-merge-code-2533
});
  const userId = getUserId(req);'
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
<<<<<<< HEAD
  const rows = await withUser(userId, async client => {
    const res = await client && client.query(
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const rows = await withUser(userId, async client => {
    const res = await client.query(
origin/cursor/automate-test-improve-and-merge-code-2533
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS (
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' || $2 || '%'
=======
  const rows = await withUser(userId, async client => {}
    const res = await client && client.query(`
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
       WHERE ($1::text IS NULL OR country = $1)         AND ($2::text IS NULL OR EXISTS ('
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
           ))
       ORDER BY created_at DESC;`
       LIMIT 25`,  const rows = await withUser(userId, async (client) => {}`
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
       WHERE ($1: :text IS NULL OR country = $1)'
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
       ORDER BY created_at DESC;`
       LIMIT 25`
      [country |null, q |null]
<<<<<<< HEAD
    )
    )
    return res && res.rows
  })
  return { results: rows }
LIMIT 25`,
      [country || null, q || null]
    )
    return res.rows
  })
  return { results: rows }
origin/cursor/automate-test-improve-and-merge-code-2533
})
  const userId = getUserId(req);'
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' })
  const items = await withUser(userId, async client => {    const res = await client && client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    )
    return res && res.rows;  const items = await withUser(userId, async (client) => {}
    const res = await client && client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    )
    return res && res.rows
  return { items }
});
const port = Number(process.env.API_PORT |4000);
app.listen({ port, host: '0.0.0.0' }).catch(err => {
  app.log.error(err);
  process.exit(1);
});  });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return { items }
});
});

;
app.get ('/talent / search', async (req, reply) => {
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const user_id = getUserId (req);
  if (return reply.code (401).send ({ error: 'unauthorized' })) {
  $2
}
  const rows = await with_user (user_id, async client => {const res = await client.query (`SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1::text IS NULL OR country = $1)         AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'))ORDER BY created_at DESC;
      LIMIT 25`,  const rows = await with_user (user_id, async (client) => {const res = await client.query (`SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1: :text IS NULL OR country = $1)SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'))ORDER BY created_at DESC;
      LIMIT 25`,[country || null, q || null])return res.rows;
  })return { results: rows }})[country || null, q || null])return res.rows;
  })return { results: rows }
})));
  if (!userId) return reply.code(401).send({ error: 'unauthorized' })const project = await withUser(userId, async client => {const res = await client.query(`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`;
      [name];
    )return res.rows[0];
  })if (!project) return reply.code(404).send({ error: 'not found' })return { project }})app.get('/notifications', async (req, reply) => {const userId = getUserId(req)if (!userId) return reply.code(401).send({ error: 'unauthorized' })const items = await withUser(userId, async client => {const res = await client.query(`SELECT id, channel, title, body, data, read, created_at FROM notification;
       WHERE read = false ORDER BY created_at DESC LIMIT 20`;
    )return res.rows;
  })return { items }})const port = Number(process.env.API_PORT || 4000)app.listen({ port, host: '0.0.0.0' }).catch(err => {app.log.error(err)process.exit(1)})
  const userId = getUserId($2);
  if (!userId) return reply.code(401).send($2);
>>>>>>> origin/main
  const items = await withUser(userId, async (client) => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res.rows
  });
  return { items }
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err);
  process.exit(1)
<<<<<<< HEAD
});
=======
}),
>>>>>>> origin/main
=======
    );
    );
    return res && res.rows;
  });
  return { results: rows }
LIMIT 25`,
      [country || null, q || null]
    );
    return res.rows;
  });
  return { results: rows };
origin/cursor/automate-test-improve-and-merge-code-2533
});
  const userId = getUserId(req);'
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async client => {    const res = await client && client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;  const items = await withUser(userId, async (client) => {}
    const res = await client && client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;
  return { items }
});
});

;'
app.get ('/talent / search', async (req, reply) => {}
  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const user_id = getUserId (req);'
  if (return reply.code (401).send ({ error: 'unauthorized' })) {}
  $2;
}
  const rows = await with_user (user_id, async client => {}
    const res = await client.query (`
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1::text IS NULL OR country = $1)         AND ($2::text IS NULL OR EXISTS ('
              SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'));
      ORDER BY created_at DESC;`
      LIMIT 25`,  const rows = await with_user (user_id, async (client) => {}
    const res = await client.query (`
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1: :text IS NULL OR country = $1);'
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
    );
    );
;
<<<<<<< HEAD
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const project = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`
      [name]
    );
    return res.rows[0];
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project };
});

app.get('/notifications', async (req, reply) => {
  const userId = getUserId(req);
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const items = await withUser(userId, async client => {
    const res = await client.query(
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
return res.rows;
  });
  return { items };
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch(err => {
  app.log.error(err);
  process.exit(1);
});
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
