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
    // Stripe payment intent creation logic would go here
    res.status(200).json({ message: 'Payment intent created' });
  } catch (error) {
    console.error('Payment intent error: ', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});
