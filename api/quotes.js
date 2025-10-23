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

<<<<<<< HEAD
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
=======
    // In a real application, you would save this to a database
    //     res.statusCode = 200;
    res.json({
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
      success: true,
      message: 'Quote request submitted successfully' 
    }));
  } catch (error) {
<<<<<<< HEAD
    console.error('Quote submission error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
=======
    //     res.statusCode = 500;
    res.json({ error: error.message || 'Quote submission failed' });
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }
}