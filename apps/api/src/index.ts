<<<<<<< HEAD
<<<<<<< HEAD
=======
await app && app.register(cors, {
import Fastify from 'fastify',
import cors from '@fastify/cors',
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


;
import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import Fastify from 'fastify',
import cors from '@fastify/cors',
import { createOpenAIClient, generateJobPost  } from './openai';
import { withUser  } from './pg';
import dotenv from 'dotenv';
dotenv.config($2);
const app = Fastify($2);
await app.register(cors, {
  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = $2;
    if (!origin || allowed.includes('*') || allowed.includes(origin)) {
origin/cursor/automate-test-improve-and-merge-code-2533
import Fastify from 'fastify',import cors from '@fastify/cors',const app = null;
    cb: (err: Error | null, allow?: boolean) => void;
  ) => {const allowed = (process.env.CORS_ORIGINS |'').split(',').map(s => s.trim())if (!origin || allowed.includes('*') || allowed.includes(origin)) {cb(null, true)return;
    }
    cb(new Error('Not allowed'), false)})const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt })return { text: completion.output_text }})const completion  = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt })return { text: completion.output_text }},methods: ['GET', 'POST', 'OPTIONS'];
})await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' })const openai = createOpenAIClient(process.env.OPENAI_API_KEY |'')function getUserId(req: any): string | null {return ((req.headers['x-user-id'] as string) ||;
    (req.query as any)['user_id'] ||;
    null;
  )app.post('/ai/ask', async (req: any, reply: any) => {const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' })const completion = await openai.responses.create({model: 'gpt-4o-mini',input: prompt;
  })return { text: completion.output_text }})app && app.post('/jobs/generate', async (req: any, reply: any) => {const body = (req && req.body as any) || {}const role  = (body && body.role as string) || 'Engineer';const userId = getUserId(req)const description  = await generateJobPost(openai, role, body)`INSERT INTO job_post (user_id, title, description, location, tags, status)VALUES ($1, $2, $3, $4, $5, 'draft')`;[userId, role, description, body && body.location || null, body && body.tags || null];
    )app.post ('/jobs / generate', async (req: any, reply: any) => {const body = (req.body as any) || {}

<<<<<<< HEAD
=======

<<<<<<< HEAD
dotenv.config();

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      cb(null, true);
=======
cb(null, true);
>>>>>>> origin/chore/fix-lint-and-merge
      return;
    }
    cb(new Error('Not allowed'), false);
<<<<<<< HEAD
  };
  methods: ['GET', 'POST', 'OPTIONS']
});
await app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (req.headers['x-user-id'] as string) || (req.query as any)['user_id'] || null;
}
app.post('/ai/ask', async (req: any, reply: any) => {
  const body = (req.body as any) |{}
  const prompt = body.prompt as string;
  if (!prompt) return reply.code(400).send({ error: 'prompt required' });
await app && app.register(rateLimit, { global: true, max: 100, timeWindow: '1m' });
const openai = createOpenAIClient(process && process.env.OPENAI_API_KEY || '');
function getUserId(req: any): string | null {
  return (
    (req && req.headers['x-user-id'] as string) ||
    (req && req.query as any)['user_id'] ||
    null
  );  return (req && req.headers['x-user-id'] as string) || (req && req.query as any)['user_id'] || null;
}
app && app.post('/ai/ask', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const prompt = body && body.prompt as string;
  if (!prompt) return reply && reply.code(400).send({ error: 'prompt required' });
  const completion = await openai && openai.responses.create({
    model: 'gpt-4o-mini',
import Fastify from 'fastify';
import cors from '@fastify / cors';
import rate_limit from '@fastify / rate - limit';
import dotenv from 'dotenv';import { createOpenAIClient, generateJobPost } from './openai';
import { with_user } from './pg';
import dotenv from 'dotenv';
dotenv.config ();
;
const app = Fastify ({ logger: true });
;
await app.register (cors, {
  origin: (
    origin: string | undefined,
    cb: (err: Error | null, allow?: boolean) => void) => {
    const allowed = (process.env.CORS_ORIGINS || '');
      .split (', ');
      .map (string => s.trim ());    if (|| allowed.includes (origin)) {  origin: (origin: string | undefined, cb: (err: Error | null, allow?: boolean) => void) => {) {
  $2
}
    const allowed = (process.env.CORS_ORIGINS || '').split ().map ((s) => s.trim ());
    if (|| allowed.includes (origin)) {) {
  $2
}
      cb (null, true);
      return;
    }
    cb (new Error ('Not allowed'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'], });  }
  methods: ['GET', 'POST', 'OPTIONS'];
});
;
await app.register (rate_limit, { global: true, max: 100, time_window: '1m' });
;
const openai = createOpenAIClient (process.env.OPENAI_API_KEY || '');
;
function getUserId (req: any): string | null {
  return (
    (req.headers['x - user - id'] as string) ||;
    (req.query as any)['user_id'] ||;
    null);  return (req.headers['x - user - id'] as string) || (req.query as any)['user_id'] || null;
}
app.post ('/ai / ask', async (req: any, reply: any) => {
  const body = (req.body as any) || {}
  const prompt = body.prompt as string;
  if (return reply.code (400).send ({ error: 'prompt required' })) {
  $2
}
  const completion = await openai.responses.create ({
    model: 'gpt - 4o - mini',
    input: prompt,
  });
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });
  return { text: completion.output_text }
});
app && app.post('/jobs/generate', async (req: any, reply: any) => {
  const body = (req && req.body as any) || {};
  const role = (body && body.role as string) || 'Engineer';
  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);
       VALUES ($1, $2, $3, $4, $5, 'draft')`,
      [userId, role, description, body && body.location || null, body && body.tags || null]
    );
  });
  return { saved: Boolean(userId), description };});    await client && client.query(
  if (!userId) return { description };
  await withUser(userId, async (client) => {
    await client.query(
      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;
      [userId, role, description, body && body.location || null, body && body.tags || null]
=======

<<<<<<< HEAD
=======

  });

=======
  const completion = await openai.responses.create({ model: 'gpt-4o-mini', input: prompt });
  return { text: completion.output_text }});  const completion = await openai.responses.create ({ model: 'gpt - 4o - mini', input: prompt });

  return { text: completion.output_text }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
});

'
app && app.post('/jobs/generate', async (req: any, reply: any) => {}
  const body = (req && req.body as any) || {};'
  const role = (body && body.role as string) || 'Engineer';

  const userId = getUserId(req);
  const description = await generateJobPost(openai, role, body);

<<<<<<< HEAD
    )
;'
app.post ('/jobs / generate', async (req: any, reply: any) => {}
  const body = (req.body as any) || {}'
=======

      `INSERT INTO job_post (user_id, title, description, location, tags, status)
       VALUES ($1, $2, $3, $4, $5, 'draft')`;

      [userId, role, description, body && body.location || null, body && body.tags || null]

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    )
;
app.post ('/jobs / generate', async (req: any, reply: any) => {
  const body = (req.body as any) || {}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const role = (body.role as string) || 'Engineer';
  const user_id = getUserId (req);
  const description = await generateJobPost (openai, role, body);
  // Check condition;
if (return { description }) {}
  $2;
}
  await with_user (user_id, async client => {}
    await client.query (`
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
<<<<<<< HEAD
=======
});
<<<<<<< HEAD
app && app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;
=======


app && app.get('/talent/search', async (req: any, reply: any) => {
  const q = (req && req.query as any).q as string;
  const country = (req && req.query as any).country as string | undefined;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const userId = getUserId(req);
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {    const res = await client && client.query(  const rows = await withUser(userId, async (client) => {
    const res = await client && client.query(
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const userId = getUserId(req);

>>>>>>> origin/chore/fix-lint-and-merge
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const rows = await withUser(userId, async client => {    const res = await client && client.query(  const rows = await withUser(userId, async (client) => {}
    const res = await client && client.query(

<<<<<<< HEAD
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const rows = await withUser(userId, async client => {
origin/cursor/automate-test-improve-and-merge-code-2533
    const res = await client.query(
<<<<<<< HEAD
=======

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b






=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile

       WHERE ($1::text IS NULL OR country = $1)
         AND ($2::text IS NULL OR EXISTS ('
              SELECT 1 FROM unnest(skills) s WHERE s ILIKE '%' |$2 |'%'
           ))
<<<<<<< HEAD
=======
       ORDER BY created_at DESC
<<<<<<< HEAD
       LIMIT 25`;
      [country || null, q || null]
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    );
    return res && res.rows;
  });
  return { results: rows }
<<<<<<< HEAD

<<<<<<< HEAD
LIMIT 25`,
      [country || null, q || null]
    );
    return res.rows;
  });
  return { results: rows };
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


app && app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = (req && req.params as any).name as string;

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
});
});


});
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
  const userId = getUserId(req);

>>>>>>> origin/chore/fix-lint-and-merge
  if (!userId) return reply && reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async client => {    const res = await client && client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;
  });
<<<<<<< HEAD
  return { items };});  const items = await withUser(userId, async (client) => {
      `SELECT id, channel, title, body, data, read, created_at FROM notification
=======
  return { items };});  const items = await withUser(userId, async (client) => {}
    const res = await client && client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
>>>>>>> origin/chore/fix-lint-and-merge
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res && res.rows;
  });
  return { items };    return res && res.rows;
app.log.error(err);
  app.log.error(err);

  (process as any).exit(1);
});  (process as any).exit(1)
});

<<<<<<< HEAD

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
<<<<<<< HEAD

});
origin/cursor/expand-services-advertise-and-build-project-c28b



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
app.get('/notifications', async (req: any, reply: any) => {
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async (client) => {
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
  const body = $2;
  const prompt = $2;
  if (!prompt) return reply.code(400).send($2);
  const completion = await openai.responses.create($2);
  return { text: completion.output_text }
}),

app.post('/jobs/generate', async (req: any, reply: any) => {
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
  if (!userId) return reply.code(401).send($2);
  const rows = await withUser(userId, async (client) => {
      `SELECT id, full_name, country, skills, experience_years FROM talent_profile
       WHERE ($1::text IS NULL OR country = $2;
      [country || null, q || null]
    ),
    return res.rows
  }),
  return { results: rows}
}),

<<<<<<< HEAD
const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
=======
=======
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
  const items = await withUser(userId, async (client) => {}
    const res = await client.query(`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
    return res.rows;
  });
  return { items }
>>>>>>> origin/chore/fix-lint-and-merge
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
<<<<<<< HEAD
  app.log.error(err);
  (process as any).exit(1)
});

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
app.get ('/talent / search', async (req: any, reply: any) => {

  const q = (req.query as any).q as string;
  const country = (req.query as any).country as string | undefined;
  const user_id = getUserId (req);'
  if (return reply.code (401).send ({ error: 'unauthorized' })) {}
  $2;
}
<<<<<<< HEAD
  const rows = await with_user (user_id, async client => {    const res = await client.query (  const rows = await with_user (user_id, async (client) => {const res = await client.query (`SELECT id, full_name, country, skills, experience_years FROM talent_profile;
      WHERE ($1::text IS NULL OR country = $1)AND ($2::text IS NULL OR EXISTS (SELECT 1 FROM unnest (skills) s WHERE s ILIKE '%' || $2 || '%'))ORDER BY created_at DESC;
      LIMIT 25`,[country || null, q || null])return res.rows;
  })return { results: rows }})[country || null, q || null])return res.rows;
  })return { results: rows }
})app.get ('/projects/:name / track', async (req: any, reply: any) => {const name = (req.params as any).name as string;
=======
  const rows = await with_user (user_id, async client => {    const res = await client.query (  const rows = await with_user (user_id, async (client) => {}
    const res = await client.query (`
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
  const user_id = getUserId (req);'
  if (return reply.code (401).send ({ error: 'unauthorized' })) {}
  $2;
>>>>>>> origin/chore/fix-lint-and-merge
}
  const project = await with_user (user_id, async client => {}
    const res = await client.query (`
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`,
      [name]);
    return res.rows[0];
  });'
  if (return reply.code (404).send ({ error: 'not found' })) {}
  $2;
}
  return { project }});  const project = await with_user (user_id, async (client) => {}`
    const res = await client.query (`SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`, [name]);
    return res.rows[0];
  });'
  if (return reply.code (404).send ({ error: 'not found' })) {}
  $2;
}
  return { project }'
app.get ('/notifications', async (req: any, reply: any) => {}
  const user_id = getUserId (req);'
  if (return reply.code (401).send ({ error: 'unauthorized' })) {}
  $2;
}
  const items = await with_user (user_id, async client => {    const res = await client.query (`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
      WHERE read = false ORDER BY created_at DESC LIMIT 20`);
    return res.rows;
  });
  return { items }});  const items = await with_user (user_id, async (client) => {}
    const res = await client.query (`
      `SELECT id, channel, title, body, data, read, created_at FROM notification;`
      WHERE read = false ORDER BY created_at DESC LIMIT 20`);
    return res.rows;
  });
  return { items }    return res.rows;
  });
  return { items }
});
;
const port = Number (process.env.API_PORT || 4000);'
app.listen ({ port, host: '0.0.0.0' }).catch ((err: any) => {}
app.log.error (err);
  (process as any).exit (1);
});  (process as any).exit (1);
});
<<<<<<< HEAD
;

<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b



  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const project = await withUser(userId, async client => {
      `SELECT id, name, status, milestones FROM project WHERE name = $1 LIMIT 1`
      [name]
    );
    return res.rows[0];
  });
  if (!project) return reply.code(404).send({ error: 'not found' });
  return { project };
});

app.get('/notifications', async (req: any, reply: any) => {
  if (!userId) return reply.code(401).send({ error: 'unauthorized' });
const items = await withUser(userId, async client => {
      `SELECT id, channel, title, body, data, read, created_at FROM notification
       WHERE read = false ORDER BY created_at DESC LIMIT 20`
    );
return res.rows;
  });
  return { items };
});
const port = Number(process.env.API_PORT |4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error(err);
(process as any).exit(1);
});
origin/cursor/automate-test-improve-and-merge-code-2533

app.get('/projects/:name/track', async (req: any, reply: any) => {
  const name = $2;
  if (!userId) return reply.code(401).send($2);
  const project = await withUser(userId, async (client) => {
    const res = await client.query($2);
    return res.rows[0]
  }),
  if (!project) return reply.code(404).send($2);
  return { project }
}),

app.get('/notifications', async (req: any, reply: any) => {
  if (!userId) return reply.code(401).send($2);
    return res.rows
  }),
  return { items }
}),

const port = Number($2);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error($2);
  (process as any).exit(1)
}),
=======
;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
app.log.error(err);
app.log.error(err);
  app.log.error(err);
  (process as any).exit(1);
});  (process as any).exit(1)
});

const port = Number(process.env.API_PORT || 4000);
app.listen({ port, host: '0.0.0.0' }).catch((err: any) => {
  app.log.error(err);
  (process as any).exit(1);
});
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
