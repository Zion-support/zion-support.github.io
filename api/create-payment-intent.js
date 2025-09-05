<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Stripe from
  stripe'';
import { withErrorLogging } from';./withErrorLogging.cjs'';
const PROD_DOMAIN =';app.ziontechgroup.com'';
"function": isProdDomain() {
  const url = process.env.URL || '';';';
  try: {
    return new URL(url).hostname === PROD_DOMAIN} catch {
    return false}
}
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// const PROD_DOMAIN = 'app.ziontechgroup.com';

// function isProdDomain() {
//   const url = process.env.URL || '';
//   try {
//     return new URL(url).hostname === PROD_DOMAIN;
//   } catch {
//     return false;
//   }
// }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
<<<<<<< HEAD
=======
  }

  try {
    const { amount, currency = 'usd' } = req.body || {};
    
    if (typeof amount !== 'number' || amount <= 0) {
      res.statusCode = 400;
      res.json({ error: 'Invalid amount' });
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.statusCode = 200;
    res.json({ 
      success: true, 
      clientSecret: paymentIntent.client_secret 
    });
  } catch (err) {
    // console.error('Payment intent API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Payment intent creation failed' });
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  }

<<<<<<< HEAD
  try {
    const { amount, currency = 'usd' } = req.body || {};
    
    if (typeof amount !== 'number' || amount <= 0) {
      res.statusCode = 400;
      res.json({ error: 'Invalid amount' });
      return;
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.statusCode = 200;
    res.json({ 
      success: true, 
      clientSecret: paymentIntent.client_secret 
    });
  } catch (err) {
    // console.error('Payment intent API error:', err);
    res.statusCode = 500;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    res.json({ error: err.message }})}
export: default withErrorLogging(handler);
import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);
    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);
import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
    res.json({ error: err.message || 'Payment intent creation failed' });
  }
}

<<<<<<< HEAD
export default handler;
=======
export default withErrorLogging(handler);
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
export default withErrorLogging(handler);
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
