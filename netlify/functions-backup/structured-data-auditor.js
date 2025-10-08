exports.config = { schedule: '*/10 * * * *' };
exports.handler = async function () {
  const baseUrl = (
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    ''
  ).replace(/\/$/, '');
