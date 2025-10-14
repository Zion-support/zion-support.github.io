const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { amount, currency = 'usd' } = req.body;

  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
    // Here you would integrate with your payment processor
    // For now, we'll return a mock response
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: amount * 100, // Convert to cents
      currency: currency,
      status: 'requires_payment_method',
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ paymentIntent }));
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }));
  }
});