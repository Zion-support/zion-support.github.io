export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      return;
    }

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

    // Log quote request for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Quote request received:', quoteData);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`,
      data: quoteData
    }));

  } catch (error) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Quote submission error:', error);
    }
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
