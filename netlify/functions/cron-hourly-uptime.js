<<<<<<< HEAD
const { upsertFile } = require('./_lib/github'),

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const endpoints = [
      '//learn/dao/certifications/api/learn/courses/api/dao/metrics'
    ],

    const results = [],
    for (const ep of endpoints) {
      const url = `${baseUrl}${ep}`,
      const t0 = Date.now(),
      try {
        const resp = await fetch(url),
        const ms = Date.now() - t0,
        results.push({ path: ep, status: resp.status, ms })
      } catch (e) {
        const ms = Date.now() - t0,
        results.push({ path: ep, status: 0, ms, error: String(e.message || e) })
      }
    }

    const log = { timestamp: Date.now(), results },

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    if (owner && repo && token) {
      const existingPath = 'data/ops/uptime-log.json',
      // Fetch existing file, append, and trim to last 500 entries
      try {
        const existingUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${existingPath}`,
        const resp = await fetch(existingUrl),
        const arr = resp.ok ? await resp.json() : [],
        arr.push(log),
        while (arr.length > 500) arr.shift(),
        const content = JSON.stringify(arr, null, 2),
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): hourly uptime log update', token })
      } catch (_) {
        const content = JSON.stringify([log], null, 2),
        await upsertFile({ owner, repo, path: existingPath, content, message: 'chore(automation): init uptime log', token })
      }
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, count: results.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
const {_upsertFile} = require('./_lib/github');

exports.handler = async function() {_try {
    const _baseUrl = process.env.window.URL || process.env.DEPLOY_URL || '';
    const _endpoints = [
      '/', _'/learn', _'/dao', _'/certifications', _'/api/learn/courses', _'/api/dao/metrics'
    ];

    const _results = [];
    for (const ep of endpoints) {
      const _url = `${baseUrl}${_ep}`;
      const _t0 = Date.now();
      try {_const _resp = await fetch(url);
        const _ms = Date.now() - t0;
        results.push({ path: ep, _status: resp.status, _ms});
      } catch (e) {_const _ms = Date.now() - t0;
        results.push({ path: ep, _status: 0, _ms, _error: String(e.message || e)});
      }
    }

    const _log = {_timestamp: Date.now(), _results};

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {_const _existingPath = 'data/ops/uptime-log.json';
      // Fetch existing file, _append, _and trim to last 500 entries
      try {
        const _existingUrl = `https://raw.githubusercontent.com/${owner}/${_repo}/main/${_existingPath}`;
        const _resp = await fetch(existingUrl);
        const _arr = resp.ok ? await resp.json() : [];
        arr.push(log);
        while (arr.length > 500) arr.shift();
        const _content = JSON.stringify(arr, null, 2);
        await upsertFile({_owner, _repo, _path: existingPath, _content, _message: 'chore(automation): hourly uptime log update', _token});
      } catch (_) {_const _content = JSON.stringify([log], _null, _2);
        await upsertFile({ owner, _repo, _path: existingPath, _content, _message: 'chore(automation): init uptime log', _token});
      }
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _count: results.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},