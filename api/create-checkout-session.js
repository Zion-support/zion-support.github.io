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

  try {
    // Create checkout session logic here
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      url: `${PROD_DOMAIN}/checkout/success`,
      productId,
      userId
    };

    res.status(200).json({ session });
  } catch (err) {
    console.error('Checkout session error:', err);
    res.status(500).json({ error: err.message });
  }
}

export default withErrorLogging(handler);