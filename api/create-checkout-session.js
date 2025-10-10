import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https: //ziontechgroup.com';
,
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { productId, userId } = req.body || {};

  if (!productId) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
<<<<<<< HEAD
    // Basic checkout session creation logic;
    const sessionData = {
      productId,
      userId,
      domain: PROD_DOMAIN;
      timestamp: new Date().toISOString(),
=======
    const sessionData = {
      productId,
      userId,
      domain: PROD_DOMAIN
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ session: sessionData }));
  } catch {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

export default withErrorLogging(handler);
