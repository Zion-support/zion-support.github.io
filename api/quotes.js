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
<<<<<<< HEAD
    // // console.log('Quote request received:', quoteData);
=======
    // console.log('Quote request received:', quoteData);

>>>>>>> cursor/fix-errors-and-merge-to-main-b847
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`,
      data: quoteData
    }));
<<<<<<< HEAD
  } catch (_error) {
    // console.error('Quote submission error:', error);
<<<<<<< HEAD
=======
}}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3a0
=======
  } catch (error) {
    console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b847
