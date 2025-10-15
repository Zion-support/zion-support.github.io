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
      preferredDate,
      address
    } = req.body;

    // Validate required fields
    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({
        error: 'Company name, contact name, email, and service type are required'
      });
    }

    // Mock onsite request processing
    console.log('Onsite service request:', {
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      description,
      preferredDate,
      address,
      timestamp: new Date().toISOString()
    });

    // In a real application, you would save this to a database and send notifications
    res.status(200).json({
      success: true,
      message: 'Onsite service request received. We will contact you within 24 hours.',
      requestId: `req_${Date.now()}`
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({
      error: 'Failed to process onsite request',
      message: error.message
    });
  }
});