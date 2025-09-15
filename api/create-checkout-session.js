<<<<<<< HEAD
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
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {
      apiVersion: '2023-10-16',
    });
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: productId, quantity: 1 }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: { userId, productId },
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
import Stripe from stripe';;const PROD_DOMAIN = app.ziontechgroup.com';;  if (context && context !== 'production') {'';  const url = process.env.URL || ;;  if (req.method !== 'POST') {'';    res.setHeader('Allow', POST');;    res.end('Method Not Allowed');;    res.json({ error: Missing cartItems' });;    const liveKey = process.env.STRIPE_SECRET_KEY || ;;      process.env.STRIPE_TEST_MODE === true' ||'';      (!isProdDomain() && liveKey.startsWith('sk_live'));;    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {'';      throw new Error('Refusing to use live Stripe key on non-production domain');;      apiVersion: 2025-06-30.basil',;          currency: 'usd',;      mode: 'payment',;    const fs = await import('fs');;    const path = await import('path');;    const file = path.join(process.cwd(), data', orders.json');;      orders = JSON.parse(fs.readFileSync(file, 'utf8'));;      // File doesn't exist or is invalid, use empty array'';    orders.push({ id: orderId, items: cartItems, status: 'pending', sandbox: useTest });;    console.error('Create checkout session error:', error);
>>>>>>> origin/auto/autonomy-17186719616
