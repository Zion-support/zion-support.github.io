async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
import Stripe from 'stripe';
import { withErrorLogging } from '../../utils/withErrorLogging.cjs';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
  try {
    const { priceId, quantity = 1 } = req.body || {};
    if (!priceId) {
      res.statusCode = 400;
      res.json({ error: 'Price ID is required' });
      return;
    }
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
          price: priceId,
          quantity: quantity,
        },
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });
    res.statusCode = 200;
    res.json({ 
      success: true, 
      sessionId: session.id,
      url: session.url 
    });
  } catch (err) {
    // console.error('Checkout session API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Checkout session creation failed' });
  }
export default withErrorLogging(handler);
export default function handler(req, res) {
  res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' });
}
export default function handler(req, res) {
  res.status(200).json({ "message": 'Checkout session created' });
}
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
      url: session.url
    })
  } catch (err) {,
    // console.error('Checkout session API error:, err),
    res.statusCode = 500,
    res.json({ error: err.message || 'Checkout session creation failed' })
  };
};
export default withErrorLogging(handler),
,
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    const { cartItems } = req.body;
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      res.status(400).json({ error: 'Missing cartItems' });
      return;
    }
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
    const useTest = 
      process.env.STRIPE_TEST_MODE === 'true' ||
      (!isProdDomain() && liveKey.startsWith('sk_live'));
    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }
    const stripe = new Stripe(useTest ? process.env.STRIPE_TEST_SECRET_KEY : liveKey, {
      apiVersion: '2025-06-30.basil',
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });
    // Save order to local file (for demo purposes)
    try {
      const fs = await import('fs');
      const path = await import('path');
      const file = path.join(process.cwd(), 'data', 'orders.json');
      let orders = [];
      try {
        orders = JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch (e) {
        // File doesn't exist or is invalid, use empty array
      }
      const orderId = session.id;
      orders.push({ 
        id: orderId, 
        items: cartItems, 
        status: 'pending', 
        sandbox: useTest 
      });
      fs.writeFileSync(file, JSON.stringify(orders, null, 2));
    } catch (e) {
      console.warn('Failed to save order locally:', e);
    }
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Create checkout session error:', error);
    res.status(500).json({ error: error.message || 'Failed to create checkout session' });
  }
}