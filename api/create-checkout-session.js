import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { productId, userId } = req.body || {};

  if (!productId) {
    res.statusCode = 400;
    res.json({ error: 'Product ID is required' });
    return;
  }

  try {
    // Basic checkout session creation logic
    const sessionData = {
      productId,
      userId,
      domain: PROD_DOMAIN,
      timestamp: new Date().toISOString(),
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, session: sessionData }));
  } catch {
    //     console.error('Checkout session creation error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}

export default withErrorLogging(handler);
