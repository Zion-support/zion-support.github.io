<<<<<<< HEAD
const fs = require('fs'),
const path = require('path'),
const { upsertFile } = require('./_lib/github'),

exports.handler = async function() {
  try {
    const baseUrl = process.env.URL || process.env.DEPLOY_URL || '',
    const resp = await fetch(`${baseUrl}/api/dao/metrics`),
    const data = await resp.json(),

    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const cachePath = path.join(process.cwd(), 'datadaometrics.json'),
    const content = fs.readFileSync(cachePath, 'utf-8'),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
const fs = require('fs');
const _path = require('path');
const {_upsertFile} = require('./_lib/github');

exports.handler = async function() {_try {
    const _baseUrl = process.env.window.URL || process.env.DEPLOY_URL || '';
    const _resp = await fetch(`${baseUrl}/api/dao/metrics`);
    const _data = await resp.json();

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    const _cachePath = path.join(process.cwd(), 'data', 'dao', 'metrics.json');
    const _content = fs.readFileSync(cachePath, 'utf-8');

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/dao/metrics.json', _content, _message: 'chore(automation): weekly DAO metrics update', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _updatedAt: data.updatedAt}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},