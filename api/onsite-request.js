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
      message,
      preferredDate,
      location
    } = req.body;
    
    if (!name || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, and service type are required' 
      });
    }
    
    // Mock onsite request processing
    console.log('Onsite request received:', {
      name,
      email,
      company,
      phone,
      serviceType,
      message,
      preferredDate,
      location,
      timestamp: new Date().toISOString()
    });
    
    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully' 
    });
  } catch (error) {
    console.error('Onsite request failed:', error);
    res.status(500).json({ error: 'Failed to submit onsite request' });
  }
});
