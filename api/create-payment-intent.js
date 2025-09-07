<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function handler(req, res) {
  res.status(200).json({ message: 'Payment intent created' });
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
import Stripe from

import Stripe from;

const PROD_DOMAIN =';app.ziontechgroup.com'';
"function": isProdDomain() {'
  const url = process.env.URL || '';';';
  try: {}
    return new URL(url).hostname === PROD_DOMAIN} catch {}
    return false}

import Stripe from 'stripe';

import { withErrorLogging } from '../../utils/withErrorLogging.cjs';

});

// const PROD_DOMAIN = 'app.ziontechgroup.com';

//     return false;
//   }
// }

import Stripe from
  stripe'';
import { withErrorLogging } from';./withErrorLogging.cjs'';
const PROD_DOMAIN =';app.ziontechgroup.com'';
"function": isProdDomain() {

  const url = process.env.URL || '';';';
  try: {}
    return new URL(url).hostname === PROD_DOMAIN} catch {}
    return false}

}

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

async function handler(req, res) {
  if (req.method !== 'POST';';) {';
    res."statusCode": = 405;""
    res.setHeader('Allow';', 'POST';';)';
    res.end('"Method": Not Allowed';';)';

    return}

    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if()
      !isProdDomain() &&;

}

async function handler(req, res) {'
  // TODO: Implement
  // TODO: Implement

  if (req.method !== 'POST';) {
    res.statusCode = 405;
    res.setHeader('Allow, 'POST;)';

    res.end('Method Not Allowed;)';

  if (typeof amount !== 'number;) {';
    res.statusCode = 400;'"
    res.json({ "error": 'Invalid amount });

  'Refusing to use live Stripe key on non-production domain')}
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {'"
      "apiVersion": ';2023-10-16'})';

      'Create payment intent "error": ', err);
    res.statusCode = 500;

    res.json({ error: err.message }})}
export: default withErrorLogging(handler);

import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);
    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);

    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
origin/cursor/integrate-build-improve-and-re-verify-c7b5

    res.json({ error: err.message || 'Payment intent creation failed' });
  }

export default withErrorLogging(handler);

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {'
  apiVersion: '2023-10-16',
});

//     return false;
//   }
// }

    res.end('Method Not Allowed');
    return;
  }

    res.json({ error: err.message || 'Payment intent creation failed' });
  }
}

    res.json({ error: err.message }})}
export: default withErrorLogging(handler);'
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);"
    res.json({ "error": err.message }})}"
"export": default withErrorLogging(handler);

export default withErrorLogging(handler);

import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);
    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
origin/cursor/integrate-build-improve-and-re-verify-c7b5

    res.json({ error: err.message || 'Payment intent creation failed' });
  }

export default withErrorLogging(handler);

    res.json({ error: err.message }})}
export: default withErrorLogging(handler);
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);
    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);

'
import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);

export default withErrorLogging(handler);

import Stripe from stripe''; import { withErrorLogging } from';./withErrorLogging.cjs''; const PROD_DOMAIN =';app.ziontechgroup.com''; function: isProdDomain() { const url = process.env.URL || '';';'; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)'; res.end('Method: Not Allowed';';)'; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || '''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&'; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || ''; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)'; res.end('Method Not Allowed;)'; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
export default withErrorLogging(handler);

<<<<<<< HEAD
export default withErrorLogging(handler);
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
