/*
 Automates merging open PRs targeting main using GITHUB token from origin remote.
*/

const owner = process.env.OWNER;
const repo = process.env.REPO && process.env.REPO.replace(/\.git$/, '');
const token = process.env.TOKEN;

if (!owner || !repo || !token) {
  console.error('Missing OWNER, REPO, or TOKEN environment variables');
  process.exit(1);
}

const headers = {
  Authorization: `token ${token}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'merge-open-prs-script'
};

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (res.status >= 400) {
    const text = await res.text().catch(() => '');
    throw new Error(`GET ${res.status} ${url} ${text}`);
  }
  return res.json();
}

async function tryMerge(number) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}/merge`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ merge_method: 'merge' })
  });
  if (res.status === 200) return { ok: true };
  const text = await res.text().catch(() => '');
  return { ok: false, status: res.status, text };
}

(async () => {
  let page = 1;
  let considered = 0;
  let merged = 0;
  let failed = 0;
  const logs = [];

  while (true) {
    const prs = await getJson(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=50&page=${page}`);
    if (!Array.isArray(prs) || prs.length === 0) break;
    const targets = prs.filter(pr => pr.base && pr.base.ref === 'main');
    for (const pr of targets) {
      considered++;
      // Check mergeable state to avoid needless attempts
      let details;
      try {
        details = await getJson(`https://api.github.com/repos/${owner}/${repo}/pulls/${pr.number}`);
      } catch (e) {
        failed++;
        logs.push(`details failed #${pr.number} ${String(e.message).slice(0, 160)}`);
        continue;
      }
      if (details.mergeable === false) {
        failed++;
        logs.push(`not mergeable #${pr.number}`);
        continue;
      }
      const result = await tryMerge(pr.number);
      if (result.ok) {
        merged++;
        logs.push(`merged #${pr.number}`);
      } else {
        failed++;
        logs.push(`failed #${pr.number} ${result.status}`);
      }
    }
    page++;
    // Safety: stop after a few pages to avoid very long runs
    if (page > 5) break;
  }

  console.log(`considered: ${considered}`);
  console.log(`merged: ${merged}`);
  console.log(`failed: ${failed}`);
  console.log(logs.join('\n'));
})().catch(e => {
  console.error(e.message);
  process.exit(1);
});
