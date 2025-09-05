const fs = require('fs');
const _path = require('path');
const {_upsertFile} = require('./_lib/github');

exports.handler = async function() {_try {
    // Demo ranking: based on certifications and progress
    const _usersPath = path.join(process.cwd(), _'data', _'learn', _'users.json');
    const _users = JSON.parse(fs.readFileSync(usersPath, _'utf-8'));

    const _entries = Object.values(users).map(_(u) => ({
      userId: u.userId, _name: u.name || u.userId, _points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce(_(acc, _p) => acc + (p.percent || 0), 0)
    }));
    const _top = entries.sort(_(a, _b) => b.points - a.points).slice(0, 100);

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    const _content = JSON.stringify({_updatedAt: Date.now(), _top}, null, 2);

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/marketplace/rankings-daily.json', _content, _message: 'chore(automation): daily rankings update', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _topCount: top.length}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
  }
};