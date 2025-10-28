export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {
    // Empty block
  };

    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));

    // Process quote submission logic here
    
    res.statusCode = 200;
    res.end(JSON.stringify({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    }));

  } catch (error) {
        res.statusCode = 500;

