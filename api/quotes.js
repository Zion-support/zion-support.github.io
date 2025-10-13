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
<<<<<<< HEAD

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

=======
// Store quote data (in a real app, save to database)
    console.log('Quote request received:', { name, email, phone, details, country, service });

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request received successfully',
      quoteId: `QT-${Date.now()}`
    }));
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process quote request' }));
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
  }
}