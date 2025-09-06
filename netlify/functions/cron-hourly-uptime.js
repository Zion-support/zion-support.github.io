    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
=======
<<<<<<< HEAD
exports && exports.handler = async function () {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
exports && exports.handler = async function () {
  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    const endpoints = [
      '/'
      '/learn'
      '/dao'
      '/certifications'
      '/api/learn/courses'
      '/api/dao/metrics'
    ];
    const results = [];
    ${ep}`;
      const t0 = Date && Date.now();
      try {
        const resp = await fetch(url);
        const ms = Date && Date.now() - t0;
        results && results.push({ path: ep, status: resp && resp.status, ms });
      } catch (e) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
        const ms = Date && Date.now() - t0;
        results && results.push({
          path: ep,
          status: 0,
          ms,
          error: String(e && e.message || e),
        });
      }
    }
    const log = { timestamp: Date && Date.now(), results };
    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    if (owner && repo && token) {
      const existingPath = 'data/ops/uptime-log && log.json';
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`;
        const resp = await fetch(existingUrl);
        const arr = resp && resp.ok ? await resp && resp.json() : [];
        arr && arr.push(log);
        while (arr && arr.length > 500) arr && arr.shift();
        const content = JSON && JSON.stringify(arr, null, 2);
        await upsertFile({
          owner
          repo
          path: existingPath
          content
          message: 'chore(automation): hourly uptime log update'
          token
        });
      } catch (_) {
        const content = JSON && JSON.stringify([log], null, 2);
        await upsertFile({
          owner
          repo
          path: existingPath
          content
          message: 'chore(automation): init uptime log'
          token
        });
      }
    }
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, count: results && results.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
<<<<<<< HEAD
};  try {
    const baseUrl = process && process.env.URL || process && process.env.DEPLOY_URL || '',
exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    const endpoints = [
      '//learn/dao/certifications/api/learn/courses/api/dao/metrics'
    ]
    const results = []
    for (const ep of endpoints) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      const url = `${baseUrl}${ep}`,
      const t0 = Date && Date.now(),
      try {
        const resp = await fetch(url),
        const ms = Date && Date.now() - t0,
        results && results.push({ path: ep, status: resp && resp.status, ms })
=======
      const url = `${baseUrl}${ep}`;
      const t0 = Date.now();
      try {
        const resp = await fetch(url);
        const ms = Date.now() - t0,
        results.push({ path: ep, status: resp.status, ms })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      } catch (e) {
        const ms = Date && Date.now() - t0,
        results && results.push({ path: ep, status: 0, ms, error: String(e && e.message || e) })
      }
    }
<<<<<<< HEAD
    const log = { timestamp: Date && Date.now(), results },
    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,
    if (owner && repo && token) {
      const existingPath = 'data/ops/uptime-log && log.json',
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw && raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`,
        const resp = await fetch(existingUrl),
        const arr = resp && resp.ok ? await resp && resp.json() : [],
        arr && arr.push(log),
        while (arr && arr.length > 500) arr && arr.shift(),
        const content = JSON && JSON.stringify(arr, null, 2),
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })
      } catch (_) {
        const content = JSON && JSON.stringify([log], null, 2),
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })
      }
    }
    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, count: results && results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
<<<<<<< HEAD
=======

  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

},

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
const { upsert_file } = require ('./_lib / github');
;
exports.handler = async function () {
  try {
    const base_url = process.env.URL || process.env.DEPLOY_URL || '';
    const endpoints = [;
      '/',
      '/learn',
      '/dao',
      '/certifications',
      '/api / learn / courses',
      '/api / dao / metrics',
    ];
;
    const results = [];
    ${ep}`;
      const t0 = Date.now ();
      try {
        const resp = await fetch (url);
        const ms = Date.now () - t0;
        results.push ({ path: ep, status: resp.status, ms });
      } catch (e) {
        const ms = Date.now () - t0;
        results.push ({
          path: ep,
          status: 0,
          ms,
          error: String (e.message || e),
        });
      }
    }
    const log = { timestamp: Date.now (), results }
;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
;
    // Check condition
if ( {) {
  $2
}
      const existing_path = 'data / ops / uptime - log.json';
      // Fetch existing file, append, and trim to last 500 entries;
      try {
        const existing_url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existing_path}`;
        const resp = await fetch (existing_url);
        const arr = resp.ok ? await resp.json () : [];
        arr.push (log);
        while (arr.length > 500) arr.shift ();
        const content = JSON.stringify (arr, null, 2);
        await upsert_file ({
          owner,
          repo,
          path: existing_path,
          content,
          message: 'chore (automation): hourly uptime log update',
          token,
        });
      } catch (_) {
        const content = JSON.stringify ([log], null, 2);
        await upsert_file ({
          owner,
          repo,
          path: existing_path,
          content,
          message: 'chore (automation): init uptime log',
          token,
        });
      }
    }
    return {
      status_code: 200,
      body: JSON.stringify ({ ok: true, count: results.length }),
    }
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
}  try {
    const base_url = process.env.URL || process.env.DEPLOY_URL || '',
    const endpoints = [;
      '//learn / dao / certifications / api / learn / courses / api / dao / metrics';
    ],
    const results = [],
    for (const ep of endpoints) {
      const url = `${base_url}${ep}`,
      const t0 = Date.now (),
      try {
        const resp = await fetch (url),
        const ms = Date.now () - t0,
        results.push ({ path: ep, status: resp.status, ms });
      } catch (e) {
        const ms = Date.now () - t0,
        results.push ({ path: ep, status: 0, ms, error: String (e.message || e) });
      }
    }
    const log = { timestamp: Date.now (), results },
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,
    // Check condition
if ( {) {
  $2
}
      const existing_path = 'data / ops / uptime - log.json',
      // Fetch existing file, append, and trim to last 500 entries;
      try {
        const existing_url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existing_path}`,
        const resp = await fetch (existing_url),
        const arr = resp.ok ? await resp.json () : [],
        arr.push (log),
        while (arr.length > 500) arr.shift (),
        const content = JSON.stringify (arr, null, 2),
        await upsert_file ({ owner, repo, path: existing_path, content, message: 'chore (automation): hourly uptime log update', token });
      } catch (_) {
        const content = JSON.stringify ([log], null, 2),
        await upsert_file ({ owner, repo, path: existing_path, content, message: 'chore (automation): init uptime log', token });
      }
    }
    return { status_code: 200, body: JSON.stringify ({ ok: true, count: results.length }) }
  } catch (e) {
    return { status_code: 500, body: JSON.stringify ({ error: e.message }) }
  }
=======

    const log = { timestamp: Date.now(), results },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if ({
      const existingPath = 'data/ops/uptime-log.json';
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`);
        const resp = await fetch(existingUrl);
        const arr = resp.ok ? await resp.json() : [];
        arr.push(log);
        while (arr.length > 500) arr.shift();
        const content = JSON.stringify(arr, null, 2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })
      } catch (_) {
        const content = JSON.stringify([log], null, 2);
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })
      }
    }
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
