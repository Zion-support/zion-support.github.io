import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = process.env.PROD_DOMAIN || 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { productId, userId } = req.body || {};
  if (!productId || !userId) {
    res.statusCode = 400;
    res.json({ error: 'Missing productId or userId' });
    return;
  }

  try {
    // Create checkout session logic here
    const session = {
      id: `cs_${Date.now()}`,
      productId,
      userId,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      session
    });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to create checkout session' 
    });
  }
}

export default withErrorLogging(handler);