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
    const { email, name, interests = [] } = req.body;

    if (!email) {
      return res.status(400).json({
        error: 'Missing required field: email'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Here you would integrate with your email service provider
    // For now, we'll just log the subscription
    console.log('Subscription received:', {
      email,
      name,
      interests,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed',
      subscriptionId: 'sub_' + Math.random().toString(36).substr(2, 9)
    });

  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({
      error: 'Failed to process subscription',
      message: error.message
    });
  }
});