const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, currency = 'usd' } = req.body;
    
    const session = {
      id: `cs_${Date.now()}`,
      amount,
      currency,
      status: 'open',
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`
    };

    res.status(200).json({ session });
  } catch {
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});