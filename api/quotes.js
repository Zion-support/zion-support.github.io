export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};
    
    // Process the quote request
    const quote = {
      id: Date.now().toString(),
      name: name || '',
      email: email || '',
      phone: phone || '',
      details: details || '',
      country: country || '',
      service: service || '',
      timestamp: new Date().toISOString()
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('Quote submitted:', quote);

    res.statusCode = 200;
    res.end(JSON.stringify({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    }));

  } catch (error) {
    console.error('Quote submission error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}