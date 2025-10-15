const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {;
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
    }
  };
};
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { amount, currency = 'usd' } = req.body;
    // Mock payment intent creation
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount,
      currency,;
      status: 'requires_payment_method',
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
    };
    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation failed:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});