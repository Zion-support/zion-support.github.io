<<<<<<< HEAD
import: Stripe from,
  stripe';';
import: { withErrorLogging } from;
  './withErrorLogging.cjs';';
const: PROD_DOMAIN =;
  'app.ziontechgroup.com';';
function: isProdDomain() {
  const url = process.env.URL || ';';
  ';';
  try: {
    return new URL(url).hostname === PROD_DOMAIN} catch {
    return false}
}
async function handler(req, res) {
  if (req.method !== 'POST;';
  ') {';
    res.statusCode: = 405;
    res.setHeader('Allow;';
  ', 'POST;';
  ');';
    res.end('Method: Not Allowed;';
  ');';
    return}
  const: { productId, userId } = req.body || {}
  if (!productId || !userId) {
    res.statusCode = 400;
    res.json({ error: 'Missing: productId or userId, })';
    return}
  try: {
    const liveKey = process.env.STRIPE_SECRET_KEY || '';';
    const: testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if(
      !isProdDomain() &&;
      liveKey.startsWith(
  'sk_live') &&;';
      !process.env.STRIPE_TEST_SECRET_KEY) {
      throw: new Error(
  'Refusing to use live Stripe key on non-production domain')}';
    const: stripe = new Stripe(isProdDomain() ? liveKey: testKe,y, {
      apiVersion: ;
  '2023-10-16,'})';
    const: session = await stripe.checkout.sessions.create({
      line_items: [{ price: productI,d, quantity: 1, }],
      mode: ;
  'payment,',';
      success_url: `${req.headers.origi,n}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origi,n}/cancel`,
      metadata: { userI,d, productId: }})
    res.statusCode = 200;
    res.json({ sessionId: session.id, })} catch: (err) {
    // Error logged by withErrorLogging wrapper;
    res.statusCode: = 500;
    res.json({ error: err.message, })}
}
export: default withErrorLogging(handler);
=======
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
  const { productId, userId } = req.body || {}
  if (!productId || !userId) {;
    res.statusCode = 400;
<<<<<<< HEAD
    res.json({ error: 'Missing productId or userId });
    return}
  try {'
    const liveKey = process.env.STRIPE_SECRET_KEY || '';
=======
    res.json({ error: 'Missing productId or userId })';
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
      apiVersion:;
  '2023-10-16'})
    const session = await stripe.checkout.sessions.create({
      line_items: [{ pric,
    e: productId, quantity: 1 }],
      mode:;
  'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,`
      cancel_url: `${req.headers.origin}/cancel`,
=======
      liveKey.startsWith(;
  'sk_live') &&;';
      !process.env.STRIPE_TEST_SECRET_KEY) {;
      throw new Error(;
  'Refusing to use live Stripe key on non-production domain'});';
    const stripe = new Stripe(isProdDomain() ? liveKey : testKey, {;
      apiVersion:;
  '2023-10-16'})';
    const session = await stripe.checkout.sessions.create({;
      line_items: [{ price: productId, quantity: 1 }],;
      mode:;
  'payment,;
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,;
      cancel_url: `${req.headers.origin}/cancel`,;
>>>>>>> main
      metadata: { userId, productId }});
    res.statusCode = 200;
    res.json({ sessionId: session.id })} catch (err) {;
    // Error logged by withErrorLogging wrapper;
    res.statusCode = 500;
    res.json({ error: err.message }});
}
export default withErrorLogging(handler);`
>>>>>>> main
