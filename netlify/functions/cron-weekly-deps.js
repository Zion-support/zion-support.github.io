const {_upsertFile} = require('./_lib/github');
const _fs = require('fs');
const _path = require('path');

async function getLatest(_pkg) {_try {
    const _resp = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}/latest`);
    if (!resp.ok) return null;
    const _json = await resp.json();
    return json.version || null;
  } catch (_) {_return null;}
}

exports.handler = async function() {_try {
    const _pkgPath = path.join(process.cwd(), _'package.json');
    const _pkg = JSON.parse(fs.readFileSync(pkgPath, _'utf-8'));
    const _deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };

    const _entries = [];
    for (const [name, current] of Object.entries(deps)) {_const _latest = await getLatest(name);
      if (!latest) continue;
      entries.push({ name, _current, _latest, _outOfDate: current.replace(/^[^0-9]*/, _'') !== latest});
    }

    const _report = {_updatedAt: Date.now(), _entries};

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/reports/deps/weekly-dependencies.json', _content: JSON.stringify(report, _null, _2), _message: 'chore(automation): weekly dependency insights', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _count: entries.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
  }
};