const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, plan } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // Mock subscription processing
    console.log('Subscription request:', { email, name, plan });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed',
      subscriptionId: `sub_${Date.now()}`
    });
  } catch (error) {
    console.error('Subscription failed:', error);
    res.status(500).json({ error: 'Failed to process subscription' });
  }
});
