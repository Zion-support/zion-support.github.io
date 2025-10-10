export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      return;
    }

=======
    return};
  try {;
const { name, email, phone, details, country, service } = req.body || {};
    if (!name || !email || !phone || !details) {
      return};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Process quote submission logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Send notification to your sales team
    // 3. Send confirmation email to the customer
<<<<<<< HEAD
    // 4. Integrate with your CRM

    const quoteData = {
=======
    // 4. Integrate with your CRM;
const quoteData = {
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
<<<<<<< HEAD

    // Log quote request for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Quote request received:', quoteData);
    }

    res.statusCode = 200;
=======
    // console.log removed for production
res.statusCode = 200;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
=======
    res.end(JSON.stringify({ error: 'Internal server error' }))};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
