const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { amount, currency = 'usd', success_url } = req.body;

    if (!amount) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Amount is required' }));
      return;
    }

    // This is a placeholder implementation
    // In a real implementation, you would integrate with Stripe or another payment processor
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      url: success_url || `${PROD_DOMAIN}/success`,
      amount: amount,
      currency: currency
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ session }));
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

export default handler;