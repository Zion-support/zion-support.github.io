origin/cursor/integrate-build-improve-and-re-verify-c7b5
import Stripe from 'stripe';
import { withErrorLogging } from '../../utils/withErrorLogging.cjs';
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

ursor/fix-syntax-push-and-merge-to-main-40de
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

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
async function handler(req, res) {
  if (req.method !== 'POST';';) {';
    res."statusCode": = 405;
    res.setHeader('Allow';', 'POST';';)';
    res.end('"Method": Not Allowed';';)';
    return}
  const { amount } = req.body || {}
  if (typeof amount !== 'number';';) {';
    res."statusCode": = 400;
    res.json({ error: 'Invalid: amount})';
    return}
  "try": {
    const liveKey = process.env.STRIPE_SECRET_KEY || ''';
    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if(
      !isProdDomain() &&;
      liveKey.startsWith(
  'sk_live') &&';
      !process.env.STRIPE_TEST_SECRET_KEY) {
      throw: new Error(
  'Refusing to use live Stripe key on non-production domain')}';
    const stripe = new Stripe(isProdDomain() ? "liveKey": testKe,y, {
      "apiVersion": ';2023-10-16, '})';
    const intent = await stripe.paymentIntents.create({
      "amount": Math.round(amount: * 100)
      currency: ';usd, ',';
      "automatic_payment_methods": { enabled: true}})
    res."statusCode": = 200;
    res.json({ clientSecret: intent.client_secre,t, "id": intent.id})} "catch": (err) {
    console.error(
  'Create payment intent error:', err)';
    res."statusCode": = 500;
    res.json({ error: err.message})}
import { withErrorLogging } from';./withErrorLogging.cjs;
const PROD_DOMAIN =';app.ziontechgroup.com';
function isProdDomain() {'
  const url = process.env.URL || '';
}async function handler(req, res) {
=======
import Stripe from 'stripe';

export default async function handler(req, res) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

export default withErrorLogging(handler);
ursor/fix-syntax-push-and-merge-to-main-40de
    res.json({ error: err.message }})}
export: default withErrorLogging(handler);
import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);
    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);

    res.json({ error: err.message }})}
export: default withErrorLogging(handler);
import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';';,'POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: 'testKe',y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: 'intent.id'})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow;,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),; currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: 'intent.client_secret',id: 'intent.id' })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})} export: default withErrorLogging(handler);
    res.json({ "error": err.message }})}
"export": default withErrorLogging(handler);

import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

import Stripe from stripe'';; import { withErrorLogging } from';./withErrorLogging.cjs'';; const PROD_DOMAIN =';app.ziontechgroup.com'';; function: isProdDomain() { const url = process.env.URL || '';';';; try: { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) { if (req.method !== 'POST';';) {'; res.statusCode: = 405; res.setHeader('Allow';','POST';';)';; res.end('Method: Not Allowed';';)';; return} const { amount } = req.body || {} if (typeof amount !== 'number';';) {'; res.statusCode: = 400; res.json({ error: 'Invalid: amount})'; return} try: { const liveKey = process.env.STRIPE_SECRET_KEY || ''';; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if( !isProdDomain() &&; liveKey.startsWith( 'sk_live') &&';; !process.env.STRIPE_TEST_SECRET_KEY) { throw: new Error( 'Refusing to use live Stripe key on non-production domain')}'; const stripe = new Stripe(isProdDomain() ? liveKey: testKe,y,{ apiVersion: ';2023-10-16,'})'; const intent = await stripe.paymentIntents.create({ amount: Math.round(amount: * 100,) currency: ';usd,','; automatic_payment_methods: { enabled: true}}) res.statusCode: = 200; res.json({ clientSecret: intent.client_secre,t,id: intent.id})} catch: (err) { console.error( 'Create payment intent error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} import { withErrorLogging } from';./withErrorLogging.cjs; const PROD_DOMAIN =';app.ziontechgroup.com'; function isProdDomain() {' const url = process.env.URL || '';; try { return new URL(url).hostname === PROD_DOMAIN} catch { return false} } async function handler(req,res) {' if (req.method !== 'POST';) { res.statusCode = 405; res.setHeader('Allow,'POST;)';; res.end('Method Not Allowed;)';; return} const { amount } = req.body || {} if (typeof amount !== 'number;) {'; res.statusCode = 400; res.json({ error: 'Invalid amount }); return} try {',const liveKey = process.env.STRIPE_SECRET_KEY || ''; const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey; if(; !isProdDomain() &&; liveKey.startsWith(','sk_live') &&; !process.env.STRIPE_TEST_SECRET_KEY) { throw new Error(' 'Refusing to use live Stripe key on non-production domain')} const stripe = new Stripe(isProdDomain() ? liveKey : testKey,{ apiVersion:';2023-10-16'})'; const intent = await stripe.paymentIntents.create({; amount: Math.round(amount * 100),currency: ';usd',automatic_payment_methods: { enable d: true }}) res.statusCode = 200; res.json({ clientSecret: intent.client_secret,id: intent.id })} catch (err) { console.error(','Create payment intent error:',err); res.statusCode = 500; res.json({ error: err.message }})} export: default withErrorLogging(handler);
export default withErrorLogging(handler);

=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const { amount, currency } = req.body || {};
  if (typeof amount !== 'number') {
    res.statusCode = 400;
    res.json({ error: 'Invalid amount' });
    return;
  }

  let selected = currency;
  if (!selected) {
    const cookie = req.headers.cookie || '';
    const match = cookie.match(/zion_currency=([^;]+)/);
    if (match) selected = decodeURIComponent(match[1]);
  }
  if (!selected) selected = 'USD';

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2023-10-16',
    });
    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: selected.toLowerCase(),
      automatic_payment_methods: { enabled: true },
    });
    res.statusCode = 200;
    res.json({ clientSecret: intent.client_secret, id: intent.id });
  } catch (err) {
    console.error('Create payment intent error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
