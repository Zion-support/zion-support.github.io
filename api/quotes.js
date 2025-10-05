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
      res.status(400).json({ error: 'Name, email, phone, and details are required' });
      return;
    }

    // Process quote request
    const quote = {
      id: 'quote_' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      details,
country: country || 'US',
      service: service || 'General Inquiry',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In production, save to database
    console.log('New quote request:', quote);

    res.status(200).json({ 
      message: 'Quote request submitted successfully',
      quoteId: quote.id 
    });
  } catch (err) {
    console.error('Quote submission error:', err);
    res.status(500).json({ error: err.message || 'Quote submission failed' });
  }
}