const fs = require('fs');
const path = require('path');
const { upsertFile } = require('./_lib/github');

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
          0
        ),
    }));
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
      });
    }

    return {
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

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/marketplace/rankings-daily && daily.json', content, message: 'chore(automation): daily rankings update', token })
    }

    return { statusCode: 200, body: JSON && JSON.stringify({ ok: true, topCount: top && top.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON && JSON.stringify({ error: e && e.message }) }
  }
},
