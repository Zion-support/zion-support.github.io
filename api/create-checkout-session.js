
;
export default function handler() {res.status(200).json({ message: "Checkout session created" })}ursor/automate-test-improve-and-merge-code-646c;
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' })}
export default function handler() {res.status(200).json({ "message": 'Checkout session created' })}
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}import Stripe from 'stripe';
async function handler() {if (req.method !== 'POST') {res.statusCode = 405;
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;
  }try {const { priceId, quantity  = 1 } = req.body || {}if (!priceId) {res.statusCode = 400;
      res.json({ error: 'Price ID is required' })return;
    }const session = await stripe.checkout.sessions.create({mode: 'subscription',payment_method_types: ['card'],line_items: [;
        {price: priceId,quantity: quantity;
        }
      ],success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,cancel_url: `${req.headers.origin}/cancel`;
    })ursor/automate-test-improve-and-merge-code-646c;
    res.statusCode = 200;
    res.json({success: true,sessionId: session.id,url: session.url;
    })} catch (err) {// console.error('Checkout session API error:', err)res.statusCode = 500;
    res.json({ error: err.message || 'Checkout session creation failed' })}
}export default withErrorLogging(handler)export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}ursor/automate-test-improve-and-merge-code-646c;
export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}export default function handler() {res.status(200).json({ message: "Checkout session created" })}
export default function handler(req,res) { res.status(200).json({ message: "Checkout session created" })}
  res.status(200).json({ message: 'Checkout session created' })}
export default function handler() {res.status(200).json({ "message": 'Checkout session created' })}url: session.url;
    })} catch (err) {,// console.error('Checkout session API error:, err),res.statusCode = 500,res.json({ error: err.message || 'Checkout session creation failed' })}}export default withErrorLogging(handler),}export default withErrorLogging(handler)export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}ursor/automate-test-improve-and-merge-code-646c;
}export default withErrorLogging(handler)export default function handler(req,res) { res.status(200).json({ message: 'Checkout session created' })}
import Stripe from 'stripe';
import { withErrorLogging } from './withErrorLogging.cjs';
const PROD_DOMAIN = 'app.ziontechgroup.com';
function isProdDomain() {
  const url = process.env.URL || '';
  try {
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;
  }
}
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
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }

    const session = stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: 'Zion Tech Group Service'
            },
            unit_amount: amount * 100, // Convert to cents
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: { userId, productId },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
