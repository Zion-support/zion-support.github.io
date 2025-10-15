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

const createCheckoutSession = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Basic checkout session creation logic
    const { amount, currency = 'usd', description } = req.body;
    
    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Mock checkout session creation
    const session = {
      id: `cs_${Date.now()}`,
      amount,
      currency,
      description: description || 'Zion Tech Group Service',
      status: 'pending',
      created: new Date().toISOString()
    };

    return res.status(200).json({ session });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
};

export default withErrorLogging(createCheckoutSession);
