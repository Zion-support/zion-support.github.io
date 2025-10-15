const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
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
      projectType, 
      description, 
      timeline,
      budget 
    } = req.body;

    if (!companyName || !contactName || !email) {
      return res.status(400).json({
        error: 'Missing required fields: companyName, contactName, email'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Here you would integrate with your CRM or project management system
    // For now, we'll just log the request
    console.log('Onsite request received:', {
      companyName,
      contactName,
      email,
      phone,
      projectType,
      description,
      timeline,
      budget,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: 'req_' + Math.random().toString(36).substr(2, 9)
    });

  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({
      error: 'Failed to submit onsite request',
      message: error.message
    });
  }
});