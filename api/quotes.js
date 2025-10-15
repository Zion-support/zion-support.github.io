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
    const { 
      name, 
      email, 
      company, 
      phone, 
      serviceType, 
      projectDescription,
      budget,
      timeline
    } = req.body;
    
    if (!name || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, and service type are required' 
      });
    }
    
    // Mock quote request processing
    console.log('Quote request received:', {
      name,
      email,
      company,
      phone,
      serviceType,
      projectDescription,
      budget,
      timeline,
      timestamp: new Date().toISOString()
    });
    
    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`
    });
  } catch (error) {
    console.error('Quote request failed:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
});
