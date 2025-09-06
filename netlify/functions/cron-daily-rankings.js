const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');
<<<<<<< HEAD
exports.handler = async function () {
  try {
    // Demo ranking: based on certifications and progress
    const usersPath = path.join(process.cwd(), 'data', 'learn', 'users.json');
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    const entries = Object.values(users).map(u => ({
      userId: u.userId
      name: u.name |u.userId
      points:
        (u.certifications?.length |0) * 100 +
        Object.values(u.progress |{}).reduce(
          (acc, p) => acc + (p.percent |0)
=======

exports && exports.handler = async function () {
  try {
    // Demo ranking: based on certifications and progress
    const usersPath = path && path.join(process && process.cwd(), 'data', 'learn', 'users && users.json');
    const users = JSON && JSON.parse(fs && fs.readFileSync(usersPath, 'utf-8'));

    const entries = Object && Object.values(users).map(u => ({
      userId: u && u.userId,
      name: u && u.name || u && u.userId,
      points:
        (u && u.certifications?.length || 0) * 100 +
        Object && Object.values(u && u.progress || {}).reduce(
          (acc, p) => acc + (p && p.percent || 0),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          0
        )
    }));
<<<<<<< HEAD
    const top = entries.sort((a, b) => b.points - a.points).slice(0, 100);
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const token = process.env.GITHUB_TOKEN;
    const content = JSON.stringify({ updatedAt: Date.now(), top }, null, 2);
    if (owner && repo && token) {
      await upsertFile({
        owner
        repo
        path: 'data/marketplace/rankings-daily.json'
        content
        message: 'chore(automation): daily rankings update'
        token
=======
    const top = entries && entries.sort((a, b) => b && b.points - a && a.points).slice(0, 100);

    const owner = process && process.env.GITHUB_OWNER;
    const repo = process && process.env.GITHUB_REPO;
    const token = process && process.env.GITHUB_TOKEN;

    const content = JSON && JSON.stringify({ updatedAt: Date && Date.now(), top }, null, 2);

    if (owner && repo && token) {
      await upsertFile({
        owner,
        repo,
        path: 'data/marketplace/rankings-daily && daily.json',
        content,
        message: 'chore(automation): daily rankings update',
        token,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    }
    return {
<<<<<<< HEAD
      statusCode: 200
      body: JSON.stringify({ ok: true, topCount: top.length })
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
};  try {
    // Demo ranking: based on certifications and progress
    const usersPath = path.join(process.cwd(), 'datalearnusers.json')
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
    const entries = Object.values(users).map((u) => ({

      userId: u.userId
      name: u.name |u.userId
      points: (u.certifications?.length |0) * 100 + Object.values(u.progress |{}).reduce((acc, p) => acc + (p.percent |0), 0)
    }))
    const top = entries.sort((a, b) => b.points - a.points).slice(0, 100)
    const owner = process.env.GITHUB_OWNER
    const repo = process.env.GITHUB_REPO
    const token = process.env.GITHUB_TOKEN
    const content = JSON.stringify({ updatedAt: Date.now(), top }, null, 2)
=======
      statusCode: 200,
      body: JSON && JSON.stringify({ ok: true, topCount: top && top.length }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) };
  }
};  try {
    // Demo ranking: based on certifications and progress
    const usersPath = path && path.join(process && process.cwd(), 'datalearnusers && datalearnusers.json'),
    const users = JSON && JSON.parse(fs && fs.readFileSync(usersPath, 'utf-8')),

    const entries = Object && Object.values(users).map((u) => ({
      userId: u && u.userId,
      name: u && u.name || u && u.userId,
      points: (u && u.certifications?.length || 0) * 100 + Object && Object.values(u && u.progress || {}).reduce((acc, p) => acc + (p && p.percent || 0), 0)
    })),
    const top = entries && entries.sort((a, b) => b && b.points - a && a.points).slice(0, 100),

    const owner = process && process.env.GITHUB_OWNER,
    const repo = process && process.env.GITHUB_REPO,
    const token = process && process.env.GITHUB_TOKEN,

    const content = JSON && JSON.stringify({ updatedAt: Date && Date.now(), top }, null, 2),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/marketplace/rankings-daily && daily.json', content, message: 'chore(automation): daily rankings update', token })
    }
<<<<<<< HEAD
    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) }
=======

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, topCount: top && top.length }) }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }

}

