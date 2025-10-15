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
    if (!email || !email.includes('@')) {
      return res.status(400).json({
        error: 'Valid email address is required'
      });
    }

    // Mock newsletter subscription
    console.log('Newsletter subscription:', {
      email: email,
      name: name,
      interests: interests,
      timestamp: new Date().toISOString()
    });

    // In a real application, you would save this to a database
    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      error: 'Failed to subscribe to newsletter',
      message: error.message
    });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ error: 'Subscription failed' });
  }
});
