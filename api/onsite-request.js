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
    
    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Missing required fields: companyName, contactName, email, serviceType' 
      });
    }

    // Mock onsite request processing
    console.log('Onsite request received:', {
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      description,
      preferredDate,
      address
    });

    res.status(200).json({
      success: true,
      message: 'Onsite request submitted successfully',
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
