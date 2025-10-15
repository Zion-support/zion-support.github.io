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

  const { email, name, interests } = req.body;

  try {
    // Subscription logic here
    console.log('Subscription request:', { email, name, interests });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed' 
    });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});