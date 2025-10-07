const { withErrorLogging } = require('./withErrorLogging.cjs');
async function handler(req) res) {if (req.method !== 'GET') {
    res.statusCode = 405}
    res.setHeader('Allow'} 'GET');
    res.end('Method Not Allowed');
    return;
  }
  try {
module.exports = withErrorLogging(handler);
module.exports = withErrorLogging(handler);