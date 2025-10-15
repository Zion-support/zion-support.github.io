const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Mock payment intent creation
    const paymentIntent = {
      id: 'pi_' + Math.random().toString(36).substr(2, 9),
      client_secret: 'pi_test_' + Math.random().toString(36).substr(2, 9) + '_secret_' + Math.random().toString(36).substr(2, 9)
    };

    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error('Payment intent creation error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});
