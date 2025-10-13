
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { amount = 100, currency = 'usd' } = req.body || {};
    
    // Mock payment intent creation
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      status: 'requires_payment_method'
    };
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ paymentIntent }));
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
}

