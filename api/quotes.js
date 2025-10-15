const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
};

const quotes = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, serviceType, message, budget } = req.body;
    
    if (!name || !email || !serviceType) {
      return res.status(400).json({ error: 'Name, email, and service type are required' });
    }

    // Mock quote generation
    const quote = {
      id: `quote_${Date.now()}`,
      name,
      email,
      company: company || '',
      serviceType,
      message: message || '',
      budget: budget || 'Not specified',
      status: 'pending',
      created: new Date().toISOString()
    };

    console.log('Quote request received:', quote);

    return res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (error) {
    console.error('Quote request error:', error);
    return res.status(500).json({ error: 'Failed to process quote request' });
  }
};

export default withErrorLogging(quotes);
