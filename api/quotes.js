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
      projectType, 
      description, 
      budget, 
      timeline, 
      companyName, 
      contactName, 
      email, 
      phone 
    } = req.body;

    // Validate required fields
    if (!projectType || !description || !companyName || !contactName || !email) {
      return res.status(400).json({
        error: 'Project type, description, company name, contact name, and email are required'
      });
    }

    // Mock quote generation
    const quote = {
      id: `quote_${Date.now()}`,
      projectType,
      description,
      budget: budget || 'To be determined',
      timeline: timeline || 'To be determined',
      companyName,
      contactName,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      estimatedCost: 'Contact for pricing',
      createdAt: new Date().toISOString()
    };

    console.log('Quote request:', quote);

    // In a real application, you would save this to a database and send notifications
    res.status(200).json({
      success: true,
      message: 'Quote request received. We will provide a detailed quote within 48 hours.',
      quote: quote
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({
      error: 'Failed to process quote request',
      message: error.message
    });
  }
});
