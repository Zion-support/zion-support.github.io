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
    // Process the quote data (in a real app, you'd save to database)
    console.log('Quote request received:', { name, email, phone, details, country, service });

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Quote request submitted successfully'
    }));
  } catch (error) {
    console.error('Quote submission error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}