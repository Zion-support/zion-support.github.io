const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { amount, currency = 'usd' } = req.body;
  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).json({ error: 'Amount is required' });
    return;
  }

  try {
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      amount: amount * 100, // Convert to cents
      currency: currency,
      status: 'requires_payment_method'
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(paymentIntent);
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});