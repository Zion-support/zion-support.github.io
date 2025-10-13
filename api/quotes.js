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

    // Process the quote request
// Process the quote request
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      message: 'Quote request submitted successfully' 
    }));
  } catch (error) {
    console.error('Quote submission error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));

  }
}