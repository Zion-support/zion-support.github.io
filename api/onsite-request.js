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

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      serviceType, 
      address, 
      preferredDate, 
      message 
    } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        error: 'Name, email, and phone are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // In a real application, you would save this to a database
    // and send notifications to the team
    console.log('Onsite request received:', {
      name,
      email,
      phone,
      company,
      serviceType,
      address,
      preferredDate,
      message
    });

    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully' 
    });
  } catch (error) {
    console.error('Onsite request processing failed:', error);
    res.status(500).json({ error: 'Failed to process onsite request' });
  }
});
