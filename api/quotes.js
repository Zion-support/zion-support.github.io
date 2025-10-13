export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details, serviceType, budget } = req.body || {};

    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

    // Mock quote processing for development
    const quoteId = `quote_${Date.now()}`;
    
    // In a real implementation, you would:
    // 1. Validate the input data
    // 2. Store the quote request in your database
    // 3. Send notification emails to your team
    // 4. Send confirmation email to the client

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      quoteId,
      message: 'Quote request submitted successfully. We will contact you within 24 hours.'
    }));
  } catch (error) {
    console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}
