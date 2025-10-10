export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
>>>>>>> origin/main
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
<<<<<<< HEAD
    }

    // Process quote submission logic here
    const quote = {
=======
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }

    // Process quote submission logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Send notification to your sales team
    // 3. Send confirmation email to the customer
    // 4. Integrate with your CRM

    const quoteData = {
>>>>>>> origin/main
      name,
      email,
      phone,
      details,
<<<<<<< HEAD
    };
=======
      country: country || 'Not specified',
      service: service || 'General inquiry',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    console.log('Quote request received:', quoteData);
>>>>>>> origin/main

    res.statusCode = 200;
<<<<<<< HEAD
    res.json({ success: true, quote });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
=======
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`,
      data: quoteData
    }));

  } catch (error) {
    console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
>>>>>>> origin/main
  }
}