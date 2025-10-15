const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
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
    const { amount, currency = 'usd', success_url, cancel_url } = req.body;

    if (!amount || !success_url || !cancel_url) {
      return res.status(400).json({
        error: 'Missing required fields: amount, success_url, cancel_url'
      });
    }

    // Here you would integrate with your payment processor
    // For now, we'll return a mock response
    const session = {
      id: 'cs_test_' + Math.random().toString(36).substr(2, 9),
      url: success_url,
      amount: amount,
      currency: currency
    };

    res.status(200).json({
      sessionId: session.id,
      url: session.url,
      amount: session.amount,
      currency: session.currency
    });

  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({
      error: 'Failed to create checkout session',
      message: error.message
    });
  }
});