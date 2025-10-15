const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
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
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email address' 
      });
    }

    // Mock subscription processing
    const subscriptionId = `sub_${Date.now()}`;
    console.log('Subscription received:', { 
      subscriptionId, 
      email, 
      name, 
      interests,
      timestamp: new Date().toISOString() 
    });
    
    // In a real application, you would save this to a database
    // and integrate with an email service
    
    res.status(200).json({
      success: true,
      subscriptionId: subscriptionId,
      message: 'Successfully subscribed'
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ 
      error: 'Failed to process subscription',
      message: error.message 
    });
  }
});