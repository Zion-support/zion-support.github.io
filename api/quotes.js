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
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      serviceType, 
      description,
      budget,
      timeline
    } = req.body;
    
    // Validate required fields
    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Mock quote request processing
    const quoteId = `quote_${Date.now()}`;
    console.log('Quote request received:', {
      quoteId,
      companyName,
      contactName,
      email,
      serviceType,
      timestamp: new Date().toISOString()
    });
    
    // In a real application, you would save this to a database
    // and send notifications to the sales team
    
    res.status(200).json({
      success: true,
      quoteId: quoteId,
      message: 'Quote request submitted successfully'
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit quote request',
      message: error.message 
    });
  }
});