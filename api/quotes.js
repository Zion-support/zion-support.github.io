<<<<<<< HEAD
export default function handler(req, res) {
=======
export default async function handler(req, res) {
>>>>>>> origin/main
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }
<<<<<<< HEAD

  try {
    const { name, email, phone, details } = req.body;

=======
  try {
    const { name, email, phone, details, country, service } = req.body || {};
>>>>>>> origin/main
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
      return;
    }
<<<<<<< HEAD

    // Here you would typically save to a database
    // For now, we'll just log the submission
    console.log('Quote request received:', { name, email, phone, details });

=======
    // Process quote submission logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Send notification to your sales team
    // 3. Send confirmation email to the customer
    // 4. Integrate with your CRM
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
    // // console.log('Quote request received:', quoteData);
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
>>>>>>> origin/main
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
<<<<<<< HEAD
      message: 'Quote request submitted successfully' 
    }));

=======
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`,
      data: quoteData;
}));
  } catch (_error) {
    // console.error('Quote submission error:', error);
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
>>>>>>> origin/main
  } catch (error) {
    console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}
=======
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
>>>>>>> origin/main
