const fs = require($2);
const path = require($2);
const { upsertFile } = require($2);
exports.handler = $2;
    const resp = await fetch($2);
    const data = await resp.json($2);
    const owner = $2;
    const repo = $2;
    const token = $2;
    const cachePath = path.join(process.cwd(), 'datadaometrics.json'),
    const content = fs.readFileSync($2);
    if (owner && repo && token) {
      await upsertFile({ owner, repo, path: 'data/dao/metrics.json', content, message: 'chore(automation): weekly DAO metrics update', token })
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, updatedAt: data.updatedAt }) }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
},