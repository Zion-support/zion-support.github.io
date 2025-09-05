 
}catch (e) {
  return {
  url, error: e.message || String (e), score: 0 
}
}
}exports.handler = async function () {
  try {
  const baseUrl = process.env.URL || process.env.DEPLOY URL || '';
const pages = ['//learn/dao/certifications/blog'];
const results = [];
for (const p of pages) {
  results.push (await scorePage (`$ {
  baseUrl 
}$ {
  p 
}`) ) 
}const report = {
  updatedAt: Date.now (), results 
};
const owner = process.env.GITHUB OWNER;
const repo = process.env.GITHUB REPO;
const token = process.env.GITHUB TOKEN;
if (owner && repo && token) {
  await upsertFile ({
  owner, repo, path: 'data/reports/seo/weekly-seo.json', content: JSON.stringify (report, null, 2), message: 'chore (automation) : weekly SEO report', token 
}) 
}return {
  statusCode: 200, body: JSON.stringify ({
  ok: true, pages: results.length 
}) 
}
}catch (e) {
  return {
  statusCode: 500, body: JSON.stringify ({
  error: e.message 
}) 
}
}
};
