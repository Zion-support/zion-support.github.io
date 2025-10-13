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
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      status: 'pending',
      url: `https://checkout.stripe.com/pay/cs_test_${Math.random().toString(36).substr(2, 9)}`
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(session));
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({
      error: 'Failed to create checkout session'
    }));
  }
});