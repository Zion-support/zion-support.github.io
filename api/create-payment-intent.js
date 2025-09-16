<<<<<<< HEAD
=======
import Stripe from stripe';;const PROD_DOMAIN = app.ziontechgroup.com';;  if (context && context !== 'production') {'';  const url = process.env.URL || ;;  if (req.method !== 'POST') {'';    res.setHeader('Allow', POST');;    res.end('Method Not Allowed');;  if (typeof amount !== 'number') {'';    res.json({ error: Invalid amount' });;    const liveKey = process.env.STRIPE_SECRET_KEY || ;;      process.env.STRIPE_TEST_MODE === true' ||'';      (!isProdDomain() && liveKey.startsWith('sk_live'));;    if (!isProdDomain() && liveKey.startsWith('sk_live') && !process.env.STRIPE_TEST_SECRET_KEY) {'';      throw new Error('Refusing to use live Stripe key on non-production domain');;      apiVersion: 2025-06-30.basil',;      currency: 'usd',;    console.error('Create payment intent error:', error);
<<<<<<< HEAD
=======
>>>>>>> origin/auto/autonomy-17186719616
=======
ursor/automate-test-improve-and-merge-code-646c;
import Stripe from;
  stripe'';
import { withErrorLogging } from';./withErrorLogging.cjs'';
const PROD_DOMAIN =';app.ziontechgroup.com'';
"function": isProdDomain() {const url = process.env.URL || '';';';
  try: {return new URL(url).hostname === PROD_DOMAIN} catch {return false}origin/cursor/integrate-build-improve-and-re-verify-c7b5;
import Stripe from 'stripe';
import { withErrorLogging  } from '../../utils/withErrorLogging.cjs';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2023-10-16';
})// const PROD_DOMAIN  = 'app.ziontechgroup.com';// function isProdDomain() {//   const url = process.env.URL || '';
//   try {//     return new URL(url).hostname === PROD_DOMAIN;
//   } catch {//     return false;
//   }
// }ursor/automate-test-improve-and-merge-code-646c;
  stripe'';
const PROD_DOMAIN =';app.ziontechgroup.com'';
"function": isProdDomain() {const url = process.env.URL || '';';';
  try: {return new URL(url).hostname === PROD_DOMAIN} catch {return false}
}ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/automate-test-improve-and-merge-code-646c;
async function handler() {if (req.method !== 'POST';';) {';
    res."statusCode": = 405;
    res.setHeader('Allow';', 'POST';';)';
    res.end('"Method": Not Allowed';';)';
    return}
  const { amount } = req.body || {}
  if (typeof amount !== 'number';';) {';
    res."statusCode": = 400;
    res.json({ error: 'Invalid: amount})';
    return}
  "try": {const liveKey = process.env.STRIPE_SECRET_KEY || ''';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if(!isProdDomain() &&;
      liveKey.startsWith('sk_live') &&';
      !process.env.STRIPE_TEST_SECRET_KEY) {throw: new Error('Refusing to use live Stripe key on non-production domain')}';
    const stripe = new Stripe(isProdDomain() ? "liveKey": testKe,y, {"apiVersion": ';2023-10-16, '})';
    const intent = await stripe.paymentIntents.create({"amount": Math.round(amount: * 100)currency: ';usd, ',';
      "automatic_payment_methods": { enabled: true}})res."statusCode": = 200;
    res.json({ clientSecret: intent.client_secre,t, "id": intent.id})} "catch": (err) {console.error('Create payment intent error:', err)';
    res."statusCode": = 500;
    res.json({ error: err.message})}
import { withErrorLogging } from';./withErrorLogging.cjs;
const PROD_DOMAIN =';app.ziontechgroup.com';
function isProdDomain() {';
  const url = process.env.URL || '';
  try {return new URL(url).hostname === PROD_DOMAIN} catch {return false}
}ursor/automate-test-improve-and-merge-code-646c;
}ursor/automate-test-improve-and-merge-code-646c;
}
async function handler(req, res) {';
  if (req.method !== 'POST';) {res.statusCode = 405;
    res.setHeader('Allow, 'POST;)';
    res.end('Method Not Allowed;)';
    return}
  const { amount } = req.body || {}
  if (typeof amount !== 'number;) {';
    res.statusCode = 400;
    res.json({ "error": 'Invalid amount })return}
  try {',const liveKey = process.env.STRIPE_SECRET_KEY || '';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if(!isProdDomain() &&;
      liveKey.startsWith(','sk_live') &&;
      !process.env.STRIPE_TEST_SECRET_KEY) {throw new Error(';
  'Refusing to use live Stripe key on non-production domain')}
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {"apiVersion": ';2023-10-16'})';
    const intent = await stripe.paymentIntents.create({"amount": Math.round(amount * 100),"currency": ';usd',"automatic_payment_methods": { enable;
    d: true }})res.statusCode = 200;
    res.json({ "clientSecret": intent.client_secret, "id": intent.id })} catch (err) {console.error(','Create payment intent "error": ', err)res.statusCode = 500;res.json({ error: err.message }})}
export: default withErrorLogging(handler)ursor/automate-test-improve-and-merge-code-646c;
import Stripe from stripe'';import { withErrorLogging } from';./withErrorLogging.cjs'';const PROD_DOMAIN =';app.ziontechgroup.com'';function: isProdDomain() { const url = process.env.URL || '';';';try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)';res.end('Method: Not Allowed';';)';return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey  = process.env.STRIPE_SECRET_KEY || ''';const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';!process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)';res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url  = process.env.URL || '';try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)';res.end('Method Not Allowed;)';return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount })return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(!isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({amount: Math.round(amount * 100)currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err)res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler)res.json({ "error": err.message }})}
"export": default withErrorLogging(handler)import Stripe from stripe'';import { withErrorLogging } from';./withErrorLogging.cjs'';const PROD_DOMAIN =';app.ziontechgroup.com'';function: isProdDomain() { const url = process.env.URL || '';';';try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)';res.end('Method: Not Allowed';';)';return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey  = process.env.STRIPE_SECRET_KEY || ''';const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';!process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)';res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url  = process.env.URL || '';try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)';res.end('Method Not Allowed;)';return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount })return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(!isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err)res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler)res.json({ "error": err.message }})}
"export": default withErrorLogging(handler)origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/automate-test-improve-and-merge-code-646c;
    res.json({ error: err.message }})}
export: default withErrorLogging(handler)res.json({ "error": err.message }})}
"export": default withErrorLogging(handler)res.json({ error: err.message || 'Payment intent creation failed' })}export default withErrorLogging(handler)ursor/automate-test-improve-and-merge-code-646c;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2023-10-16';
})// const PROD_DOMAIN  = 'app.ziontechgroup.com';// function isProdDomain() {//   const url = process.env.URL || '';
//   try {//     return new URL(url).hostname === PROD_DOMAIN;
//   } catch {//     return false;
//   }
// }async function handler() {if (req.method !== 'POST') {res.statusCode = 405;
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;
  }res.json({ error: err.message || 'Payment intent creation failed' })}
}export default withErrorLogging(handler)export default withErrorLogging(handler)res.json({ error: err.message }})}
export: default withErrorLogging(handler)res.json({ "error": err.message }})}
"export": default withErrorLogging(handler)export default withErrorLogging(handler)export default withErrorLogging(handler)res.json({ "error": err.message }})}
"export": default withErrorLogging(handler)origin/cursor/integrate-build-improve-and-re-verify-c7b5;
    res.json({ error: err.message || 'Payment intent creation failed' })}export default withErrorLogging(handler)res.json({ error: err.message }})}
export: default withErrorLogging(handler)res.json({ "error": err.message }})}
"export": default withErrorLogging(handler)ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
export default withErrorLogging(handler)ursor/automate-test-improve-and-merge-code-646c;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
export default withErrorLogging(handler)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
});

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;

    if (!amount) {
      return res.status(400).json({ message: 'Amount is required' });
    }

    const paymentIntent = stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true
      }
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
>>>>>>> origin/merge-pr-12271
>>>>>>> cursor/create-and-deploy-new-content-376e
