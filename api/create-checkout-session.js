import { withErrorLogging } from './withErrorLogging.cjs';'
const PROD_DOMAIN = 'https://ziontechgroup.com';'
async function handler(req, res) {
  if (req.method !== 'POST') {'    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');'    res.end(JSON.stringify({ error: 'Method not allowed' }));'    return;
  }

  try {
    const { amount, currency = 'usd', description } = req.body;'
    if (!amount) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');'      res.end(JSON.stringify({ error: 'Amount is required' }));'      return;
    }

    // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
    // For now, we'll return a mock response'    const session = {
      id: `cs_${Date.now()}`,
      amount: amount,
      currency: currency,
      description: description || 'Zion Tech Group Service','      status: 'pending','      checkout_url: `${PROD_DOMAIN}/checkout?session_id=cs_${Date.now()}`
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');'    res.end(JSON.stringify({ session }));
  } catch (error) {
    console.error('Error creating checkout session:', error);'    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');'    res.end(JSON.stringify({ error: 'Internal server error' }));'  }
}

export default withErrorLogging(handler);