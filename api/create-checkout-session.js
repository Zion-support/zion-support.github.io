import { withErrorLogging } from './withErrorLogging.cjs';

<<<<<<< HEAD
import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'ziontechgroup.com';

=======
const PROD_DOMAIN = process.env.PROD_DOMAIN || 'https://ziontechgroup.com';

>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
<<<<<<< HEAD
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
=======

  const { productId, userId } = req.body || {};

  try {
    // Create checkout session logic here
    const session = {
      id: `cs_${Date.now()}`,
      productId,
      userId,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef

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