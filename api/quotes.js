// API endpoint for quote requests
export default function handler(req, res) {
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
      projectDescription, 
      budget, 
      timeline 
    } = req.body;

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, phone, and service type are required' 
      });
    }

    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || '',
      serviceType,
      projectDescription: projectDescription || '',
      budget: budget || '',
      timeline: timeline || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Here you would typically save to a database
    // For now, just log the quote request
    console.log('Quote request received:', quote);

    res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit quote request',
      message: error.message 
    });
  }
}