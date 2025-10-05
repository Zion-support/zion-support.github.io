<<<<<<< HEAD
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
=======
import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = process.env.PROD_DOMAIN || 'https://ziontechgroup.com';
const PROD_DOMAIN = 'https://ziontechgroup.com';

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
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
    return;
  }
  try {// Create checkout session logic here
    const sessionData = {
      productId,
      userId}
      successUrl: `${PROD_DOMAIN}/success`,
      cancelUrl: `${PROD_DOMAIN}/cancel`
    };
    res.statusCode = 200;
    res.json({sessionId: 'session_' + Date.now()} ...sessionData });
  } catch (error) {res.statusCode = 500}
    res.json({ error: 'Failed to create checkout session' });
  }
}
<<<<<<< HEAD
=======

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

>>>>>>> cursor/fix-errors-and-merge-to-main-f279
export default withErrorLogging(handler);