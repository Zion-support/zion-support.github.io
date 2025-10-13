const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).end(JSON.stringify({ error: 'Internal server error' }));
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { productId } = req.body;
  
  if (!productId) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
    console.error('Error:', 'Stripe not configured');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      status: 'pending',
      message: 'Checkout session would be created here'
    });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({
      error: 'Failed to create checkout session'
    });
  }
});