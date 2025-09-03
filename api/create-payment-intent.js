<<<<<<< HEAD
import Stripe from stripe';
=======
import Stripe from,;
  stripe;
>>>>>>> main
import { withErrorLogging } from;
  './withErrorLogging.cjs;
const PROD_DOMAIN =;
<<<<<<< HEAD
  'app.ziontechgroup.com';
function isProdDomain() {'
  const url = process.env.URL || ';
  ';
  try {
    return new URL(url).hostname === PROD_DOMAIN} catch {
    return false}
}
async function handler(req, res) {'
  if (req.method !== 'POST;
  ') {
=======
  'app.ziontechgroup.com;
function isProdDomain() {;
  const url = process.env.URL || ;
  ;
  try {;
    return new URL(url).hostname === PROD_DOMAIN} catch {;
    return false}
}
async function handler(req, res) {;
  if (req.method !== 'POST;) {';
>>>>>>> main
    res.statusCode = 405;
    res.setHeader('Allow;, 'POST;);';
    res.end('Method Not Allowed;);';
    return}
  const { amount } = req.body || {}
  if (typeof amount !== 'number;) {';
    res.statusCode = 400;
<<<<<<< HEAD
    res.json({ error: 'Invalid amount });
    return}
  try {'
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
=======
    res.json({ error: 'Invalid amount })';
    return}
  try {;
    const liveKey = process.env.STRIPE_SECRET_KEY || ';
>>>>>>> main
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if(;
      !isProdDomain() &&;
<<<<<<< HEAD
      liveKey.startsWith('
  'sk_live') &&;
      !process.env.STRIPE_TEST_SECRET_KEY) {
      throw new Error('
  'Refusing to use live Stripe key on non-production domain')}
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {
=======
      liveKey.startsWith(;
  'sk_live') &&;';
      !process.env.STRIPE_TEST_SECRET_KEY) {;
      throw new Error(;
  'Refusing to use live Stripe key on non-production domain'});';
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {;
>>>>>>> main
      apiVersion:;
  '2023-10-16'})';
    const intent = await stripe.paymentIntents.create({;
      amount: Math.round(amount * 100),;
      currency:;
<<<<<<< HEAD
  'usd',
      automatic_payment_methods: { enable,
    d: true }})
    res.statusCode = 200;
    res.json({ clientSecret: intent.client_secret, id: intent.id })} catch (err) {
    console.error('
  'Create payment intent error:', err);
=======
  'usd,;
      automatic_payment_methods: { enabled: true }});
    res.statusCode = 200;
    res.json({ clientSecret: intent.client_secret, id: intent.id })} catch (err) {;
    console.error(;
  'Create payment intent error:', err);';
>>>>>>> main
    res.statusCode = 500;
    res.json({ error: err.message }});
}
export default withErrorLogging(handler);