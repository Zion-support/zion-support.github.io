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

  const { amount } = req.body;
  
  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).end(JSON.stringify({ error: 'Amount is required' }));
    return;
  }

  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      status: 'requires_payment_method',
      message: 'Payment intent would be created here'
    });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({
      error: 'Failed to create payment intent'
    });
  }
});