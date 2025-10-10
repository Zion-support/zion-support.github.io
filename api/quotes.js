export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
    }

    // Process quote submission logic here;
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

    // Process quote submission logic here
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
      status: 'pending'
    };

    // In a real application, you would save this to a database;
    //     res.statusCode = 200;
    res.json({)
      success: true;),
      message: 'Quote submitted successfully'),
      quote),
    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({
      success: true,
      message: 'Quote submitted successfully',
      quote
    });
    // In a real application, you would save this to a database
    console.log('Quote submitted:', quote);
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote submitted successfully', quoteId: quote.id });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
      createdAt: new Date().toISOString()
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Quote submission failed' }));
    res.statusCode = 500;
    res.json({ error: error.message || 'Quote submission failed' });
  }
}