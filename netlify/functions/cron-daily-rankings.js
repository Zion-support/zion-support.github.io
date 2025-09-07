const fs = require($2);
const path = require($2);
const { upsertFile } = require($2);
exports.handler = async function() {
  try {
    // Demo ranking: based on certifications and progress
    const usersPath = path.join(process.cwd(), 'datalearnusers.json'),
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8')),

    const entries = $2;
      name: u.name || u.userId,
      points: (u.certifications?.length || 0) * 100 + Object.values(u.progress || {}).reduce((acc, p) => acc + (p.percent || 0), 0)
    })),
    const top = entries.sort((a, b) => b.points - a.points).slice($2);
    const owner = $2;
    const repo = $2;
    const token = $2;
    const content = JSON.stringify({ updatedAt: Date.now(), top }, null, 2),

    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/marketplace/rankings-daily.json', content, message: 'chore(automation): daily rankings update', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, topCount: top.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},