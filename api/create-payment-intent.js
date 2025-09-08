
import { withErrorLogging } from;
  './withErrorLogging.cjs;
const PROD_DOMAIN =;

    res.statusCode = 405;
    res.setHeader('Allow, 'POST;)';
    res.end('Method Not Allowed;)';
    return}
  const { amount } = req.body || {}
  if (typeof amount !== 'number;) {';
    res.statusCode = 400;

    const testKey = process.env.STRIPE_TEST_SECRET_KEY || liveKey;
    if(;
      !isProdDomain() &&;

      apiVersion:;
  '2023-10-16'})';
    const intent = await stripe.paymentIntents.create({;
      amount: Math.round(amount * 100),;
      currency:;

    res.statusCode = 500;
    res.json({ error: err.message }})}
export: default withErrorLogging(handler);