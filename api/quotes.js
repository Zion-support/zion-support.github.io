export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
<<<<<<< HEAD
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
=======
>>>>>>> origin/resolve-merge-conflicts
    }

    // Process quote submission logic here
    const quote = {
<<<<<<< HEAD
      id: Date.now().toString(),
=======
>>>>>>> origin/resolve-merge-conflicts
      name,
      email,
      phone,
      details,
<<<<<<< HEAD
      country,
      service,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('Quote submitted:', quote);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    }));
  } catch (error) {
    console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit quote request' }));
=======
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
>>>>>>> origin/resolve-merge-conflicts
  }
}