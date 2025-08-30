import Stripe from 'stripe';
import { withErrorLogging } from "./withErrorLogging.cjs";
const PROD_DOMAIN = 'app.ziontechgroup.com';
function isProdDomain() {
  const url = process.env.URL || '';
  try {
<<<<<<< HEAD
    return new URL(url).hostname === PROD_DOMAIN;
  } catch {
    return false;


=======
    return new URL(url).hostname === PROD_DOMAIN} catch {
    return false}
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
<<<<<<< HEAD
    return;

  const { productId, userId } = req.body || { /* empty */ };
  if (!productId || !userId) {
    res.statusCode = 400;
    res.json({ error: 'Missing productId or userId' });
    return;

=======
    return}
  const { productId, userId } = req.body || {};
  if (!productId || !userId) {
    res.statusCode = 400;
    res.json({ error: 'Missing productId or userId' });
    return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  try {
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {
<<<<<<< HEAD
      throw new Error('Refusing to use live Stripe key on non-production domain');

=======
<<<<<<< HEAD
      throw new Error('Refusing to use live Stripe key on non-production domain')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {
      apiVersion: '2023-10-16',
    });
=======
      throw new Error('Refusing to use live Stripe key on non-production domain');
    }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const session = await stripe.checkout.sessions.create({
      line_items[{ price: productId, quantity: 1 }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: { userId, productId },
    });
    res.statusCode = 200;
<<<<<<< HEAD
    res.json({ sessionId: session.id });
  } catch (err) {
<<<<<<< HEAD
    // // // console.error('Create checkout session error:', err);
=======
    // // // // // // // console.error('Create checkout session error:', err);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    res.statusCode = 500;
    res.json({ error: err.message });


export default withErrorLogging(handler);
}}}}}}}
=======
    res.json({ sessionId: session.id })} catch (err) {
    console.error('Create checkout session error:', err);
    res.statusCode = 500;
    res.json({ error: err.message })}
}
export default withErrorLogging(handler);

export default isProdDomain;
export default isProdDomain;
export default isProdDomain;
export default isProdDomain;
export default isProdDomain;
export default isProdDomain;
export default isProdDomain;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
