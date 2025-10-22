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

<<<<<<< HEAD
const handler = async (req, res) => {
=======
export default withErrorLogging(async (req, res) => {
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd', description } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    // Mock payment intent creation
    // In a real implementation, you would use Stripe or another payment processor
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      description: description || 'Zion Tech Group Service',
      status: 'requires_payment_method',
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`
    };

    res.status(200).json({ 
      paymentIntent 
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
<<<<<<< HEAD
};

export default withErrorLogging(handler);
=======
});
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
