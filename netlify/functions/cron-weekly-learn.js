<<<<<<< HEAD
const fs = require('fs'),
const path = require('path'),
const { upsertFile } = require('./_lib/github'),

exports.handler = async function() {
  try {
    const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
    const coursesPath = path.join(process.cwd(), 'datalearncourses.json'),
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8')),
    const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf-8')),

    const summary = {
      updatedAt: Date.now(),
      totals: {
        users: Object.keys(users).length,
        courses: courses.length,
        completions: Object.values(users).reduce((acc, u) => acc + (u.certifications?.length || 0), 0)
      },
      topBadges: Object.values(users).reduce((map, u) => {
        (u.badges || []).forEach((b) => { map[b] = (map[b] || 0) + 1 }),
        return map
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }, {})
    },

<<<<<<< HEAD
    const owner = process.env.GITHUB_OWNER,
    const repo = process.env.GITHUB_REPO,
    const token = process.env.GITHUB_TOKEN,

    const content = JSON.stringify(summary, null, 2),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/learn/insights-weekly.json', content, message: 'chore(automation): weekly learning insights', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, summary }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
=======
    const _owner = process.env.GITHUB_OWNER;
    const _repo = process.env.GITHUB_REPO;
    const _token = process.env.GITHUB_TOKEN;

    const _content = JSON.stringify(summary, null, 2);

    if (owner && repo && token) {_await upsertFile({ owner, _repo, _path: 'data/learn/insights-weekly.json', _content, _message: 'chore(automation): weekly learning insights', _token});
    }

    return {_statusCode: 200, _body: JSON.stringify({ ok: true, _summary}) };
  } catch (e) {_return { statusCode: 500, _body: JSON.stringify({ error: e.message}) };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
},