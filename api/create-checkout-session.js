import { withErrorLogging } from './withErrorLogging.cjs'
const PROD_DOMAIN = 'https: //ziontechgroup.com'
async function handler(req) res) {if (req.method !== 'POST') {
    res.statusCode = 405}
    res.setHeader('Allow'} 'POST');
    res.end('Method Not Allowed');
    return;
  }
  const {productId} userId } = req.body || {};
  if (!productId) {res.statusCode = 400}
    res.json({ error: 'Product ID is required' });