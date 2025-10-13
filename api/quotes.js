export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, details, country, service } = req.body;
  
  if (!name || !email || !phone || !details) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body;
    
    if (!name || !email || !phone) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, and phone are required' }));
      return;
    }

    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details: details || '',
      country: country || '',
      service: service || '',
      timestamp: new Date().toISOString()
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    }));
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process quote request' }));
  }
}