const fs = require('fs');
const _path = require('path');
const {_upsertFile} = require('./_lib/github');

exports.handler = async function() {_try {
    const _usersPath = path.join(process.cwd(), _'data', _'learn', _'users.json');
    const _coursesPath = path.join(process.cwd(), _'data', _'learn', _'courses.json');
    const _users = JSON.parse(fs.readFileSync(usersPath, _'utf-8'));
    const _courses = JSON.parse(fs.readFileSync(coursesPath, _'utf-8'));

    const _summary = {
      updatedAt: Date.now(), _totals: {
        users: Object.keys(users).length, _courses: courses.length, _completions: Object.values(users).reduce(_(acc, _u) => acc + (u.certifications?.length || 0), _0)},
      topBadges: Object.values(users).reduce(_(map, _u) => {_(u.badges || []).forEach(_(b) => { map[b] = (map[b] || 0) + 1;});
        return map;
      }, {})
    };

    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    const _content = JSON.stringify(summary, null, 2);

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/learn/insights-weekly.json', _content, _message: 'chore(automation): weekly learning insights', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _summary}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
  }
};