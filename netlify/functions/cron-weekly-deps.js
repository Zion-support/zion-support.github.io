const { upsertFile } = require($2);
const fs = require($2);
const path = require($2);
async function getLatest(pkg) {
  try {
    const resp = $2;
    if (!resp.ok) return null,
    const json = await resp.json($2);
    return json.version || null
  } catch (_) {
    return null
  }
}

exports.handler = async function() {
  try {
    const pkgPath = path.join(process.cwd(), 'package.json'),
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')),
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) },

    const entries = $2;
    for (const [name, current] of Object.entries(deps)) {
      const latest = await getLatest($2);
      if (!latest) continue,
      entries.push({ name, current, latest, outOfDate: current.replace(/^[^0-9]*/, '') !== latest })
    }

    const report = { updatedAt: Date.now(), entries },

    const owner = $2;
    const repo = $2;
    const token = $2;
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/reports/deps/weekly-dependencies.json', content: JSON.stringify(report, null, 2), message: 'chore(automation): weekly dependency insights', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, count: entries.length }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},