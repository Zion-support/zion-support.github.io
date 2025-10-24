export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

    // Process quote submission logic here
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country,
      service,
      timestamp: new Date().toISOString(),
<<<<<<< HEAD
      status: 'pending'
    };
=======
      status: 'pending',
    }
    // Log quote request for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Quote request received:', quoteData)
    }
>>>>>>> cursor/delete-records-30ea

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('Quote submitted:', quote);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    }));

  } catch (error) {
    console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Internal server error' }));
=======
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
>>>>>>> cursor/delete-records-30ea
  }
}
