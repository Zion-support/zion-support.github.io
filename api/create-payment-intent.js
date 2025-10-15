const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
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
    const { amount, currency = 'usd' } = req.body;
    
    // Stripe payment intent creation logic would go here
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount,
      currency,
      status: 'requires_payment_method'
    };
    
    res.status(200).json({ 
      message: 'Payment intent created',
      paymentIntent
    });
  } catch (error) {
    console.error('Payment intent error: ', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});
