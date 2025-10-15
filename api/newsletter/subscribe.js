const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const subscribe = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;
    
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Mock newsletter subscription
    console.log('Newsletter subscription:', { email, name });
    
    return res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      email 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
};

export default withErrorLogging(subscribe);
