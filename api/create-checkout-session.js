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

  const { productId } = req.body;
  if (!productId) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).json({ error: 'Product ID is required' });
    return;
  }

  try {
    console.error('Error:', 'Creating checkout session');
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      status: 'pending'
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(session);
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});