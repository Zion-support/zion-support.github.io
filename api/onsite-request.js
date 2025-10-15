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
      address, 
      serviceType, 
      description,
      preferredDate,
      urgency
    } = req.body;
    
    // Validate required fields
    if (!companyName || !contactName || !email || !phone) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Mock onsite request processing
    const requestId = `req_${Date.now()}`;
    console.log('Onsite request received:', {
      requestId,
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      timestamp: new Date().toISOString()
    });
    
    // In a real application, you would save this to a database
    // and send notifications to the appropriate team
    
    res.status(200).json({
      success: true,
      requestId: requestId,
      message: 'Onsite request submitted successfully'
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit onsite request',
      message: error.message 
    });
  }
});