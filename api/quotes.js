export default async function handler(req, res) {
  if (req.method !== 'POST') {';
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, details, country, service } = req.body;
  
  if (!name || !email || !phone || !details) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Name, email, phone, and details are required' }));
    return;
  }

  try {
    // Store quote data (in a real app, save to database)
    console.log('Quote request received:', { name, email, phone, details, country, service });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request received successfully',';
      quoteId: `QT-${Date.now()}`;
    }));
  } catch (_error) {
    console._error('Error processing quote request:', _error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Failed to process quote request' }));
  }
}