
import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'ziontechgroup.com';

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
    const testKey = process.env.STRIPE_TEST_SECRET_KEY;
    const liveKey = process.env.STRIPE_LIVE_SECRET_KEY;
    
    const stripe = require('stripe')(testKey || liveKey);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Zion Tech Group Service',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: { userId, productId }
    });
    
    res.statusCode = 200;
    res.json({ sessionId: session.id });
  } catch (err) {
    // Error logged by withErrorLogging wrapper
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

export default withErrorLogging(handler);

