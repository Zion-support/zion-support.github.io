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
export default withErrorLogging(handler);