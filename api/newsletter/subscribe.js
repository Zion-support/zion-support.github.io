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

  const { email, name } = req.body;

  try {
    // Newsletter subscription logic here
    console.log('Newsletter subscription:', { email, name });
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
});