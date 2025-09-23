const axios = require('axios');
const token = process.env.GITHUB_TOKEN;
const owner = process.env.OWNER;
const repo = process.env.REPO;
const baseUrl = 'https://api.github.com';
(async () => {
  if (!token || !owner || !repo) {
    console.error('Missing env vars');
    process.exit(1);
  }
  const api = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `token ${token}`, 'User-Agent': 'merge-bot' }
  });
  const merged = []; const failed = [];
  let page = 1; const perPage = 10o0; const openPRs = [];
  while (true) {
    const { data } = await api.get(`/repos/${owner}/${repo}/pulls`, { params: { state: 'open', per_page: perPage, page } });
    if (!data.length) break; openPRs.push(...data); page++;
  }
  for (const pr of openPRs) {
    try {
      const res = await api.put(`/repos/${owner}/${repo}/pulls/${pr.number}/merge`, {
        merge_method: 'squash',
        commit_title: `chore: squash-merge PR #${pr.number} - ${pr.title}`});
      if (res.data.merged) {
        merged.push({ number: pr.number, title: pr.title });
        console.log(`MERGED #${pr.number}: ${pr.title}`);
      } else {
        failed.push({ number: pr.number, title: pr.title, reason: 'not merged' });
        console.log(`FAILED #${pr.number}: ${pr.title}`);
      }
    } catch (e) {
      const status = e.response?.status; const msg = e.response?.data?.message || e.message;
      failed.push({ number: pr.number, title: pr.title, status, msg });
      console.log(`FAILED #${pr.number}: ${pr.title} (${status}) ${msg}`);
    }
  }
  console.log(JSON.stringify({ merged, failed }, null, 2));
})();
