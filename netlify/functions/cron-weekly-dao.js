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
  }
};