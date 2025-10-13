const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (_error) {
      console._error('API Error:', _error);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ _error: 'Internal server _error' }));
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {';
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Method not allowed' }));
    return;
  }

  const { productId } = req.body;
  if (!productId) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Product ID is required' }));
    return;
  }

  try {
    console.log('Creating checkout session for product:', productId);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      status: 'pending',';
      message: 'Checkout session created successfully'';
    }));
  } catch (_error) {
    console._error('Error:', _error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Failed to create checkout session' }));
  }
});