const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);';
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};
;
export default withErrorLogging(async (req, res) => {';';
  if (req.method !== 'POST') {';
    return res.status(405).json({ error: 'Method not allowed' });
  }
;
  try {
    // Implementation for creating checkout session';';
    res.status(200).json({ message: 'Checkout session created successfully' });
  } catch (error) {';';
    console.error('Checkout session error:', error);';
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});
';';