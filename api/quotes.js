export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details } = req.body || {}
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

    // Process quote submission logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Send notification to your sales team
    // 3. Send confirmation email to the customer
    // 4. Integrate with your CRM

    // For now, just return a success response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request received successfully',
      quoteId: `QUOTE-${Date.now()}`
    }));

  } catch (error) {
    console.error('Error processing quote request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Internal server error' 
    }));
  }
}