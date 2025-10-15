const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

const createPaymentIntent = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd', description } = req.body;
    
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Mock payment intent creation
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount,
      currency,
      description: description || 'Zion Tech Group Service',
      status: 'requires_payment_method',
      created: new Date().toISOString()
    };

    return res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    return res.status(500).json({ error: 'Failed to create payment intent' });
  }
};

export default withErrorLogging(createPaymentIntent);
