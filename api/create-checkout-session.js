import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  const { productId } = req.body || {};

  if (!productId) {
    res.status(400).json({ error: 'Product ID is required' });
    return;
  }

  try {
    // Implementation for creating checkout session
    const sessionData = { 
      id: 'cs_test', 
      url: `${PROD_DOMAIN}/checkout/${productId}` 
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ sessionData }));
  } catch {
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}

export default withErrorLogging(handler);
