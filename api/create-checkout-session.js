const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { productId } = req.body;
  if (!productId) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Product ID is required' }));
    return;
  }

  try {
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      status: 'pending',
      productId: productId
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(session));
  } catch (error) {
    console.error('Checkout session creation error:', error);
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to create checkout session' }));
  }
});