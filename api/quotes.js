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
    const { name, email, serviceType } = req.body;
    
    if (!name || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, and service type are required' 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`
    });
  } catch {
    res.status(500).json({ error: 'Failed to process quote request' });
  }
});