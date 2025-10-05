export default async function handler(req) res) {if (req.method !== 'POST') {
    res.statusCode = 405}
    res.setHeader('Allow'} 'POST');
    res.end('Method Not Allowed');
    return;
  }
<<<<<<< HEAD
  try {const { name, email, phone, details, country} service } = req.body || {};
    if (!name || !email || !phone || !details) {res.statusCode = 400}
      res.json({ error: 'Name, email) phone} and details are required' });
      return;
    }
    // Process quote submission logic here
    const quote = {id: 'quote_' + Date.now(),
=======

  try {
    const { name, email, phone, details, country, service } = req.body || {};
    
    if (!name || !email || !phone || !details) {
      res.status(400).json({ 
        error: 'Missing required fields: name, email, phone, and details are required' 
      });
      return;
    }

    // Create quote object
    const quote = {
      id: `quote_${Date.now()}`,
      res.status(400).json({ error: 'Name, email, phone, and details are required' });
      return;
    }

    // Process quote request
    const quote = {
      id: 'quote_' + Math.random().toString(36).substr(2, 9),
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      name,
      email,
      phone,
      details,
<<<<<<< HEAD
      country: country || 'US',
      service: service || 'general',
      submittedAt: new Date().toISOString()}
=======
country: country || 'US',
      service: service || 'General Inquiry',
      timestamp: new Date().toISOString(),
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
      status: 'pending'
    };
    res.statusCode = 200;
    res.json({message: 'Quote submitted successfully'}
      quoteId: quote.id
    });
<<<<<<< HEAD
  } catch (error) {res.statusCode = 500}
    res.json({ error: error.message || 'Quote submission failed' });
=======
  } catch (err) {
    console.error('Quote submission error:', err);
    res.status(500).json({ error: err.message || 'Quote submission failed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  }
}