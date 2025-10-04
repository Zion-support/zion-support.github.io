export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};
    
    if (!name || !email || !phone || !details) {
      res.status(400).json({ 
        error: 'Missing required fields: name, email, phone, and details are required' 
      });
      return;
    }

    // Create quote object
    const quote = {
      id: `quote_${Date.now()}`,
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // In production, save to database
    console.log('New quote submission:', quote);

    res.status(200).json({
      success: true,
      message: 'Quote submitted successfully',
      quoteId: quote.id
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({ 
      error: error.message || 'Quote submission failed' 
    });
  }
}