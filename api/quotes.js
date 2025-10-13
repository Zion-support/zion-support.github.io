export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, details, country, service } = req.body;
  
  if (!name || !email || !phone || !details) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400).end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
    return;
  }

  try {
    const quoteData = {
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    console.log('Quote request received:', quoteData);
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify({ 
      success: true,
      message: 'Quote request submitted successfully' 
    }));
  } catch (error) {
    console.error('Quote submission error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({ error: 'Internal server error' }));
  }
}