const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, quantity = 1 } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    // Here you would integrate with your payment processor
    // For now, return a mock response
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      url: 'https://checkout.stripe.com/pay/cs_test_' + Math.random().toString(36).substr(2, 9),
      priceId,
      quantity
    };

    res.status(200).json({ session });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      message: error.message 
    });
  }
});