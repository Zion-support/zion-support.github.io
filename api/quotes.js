import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, details, serviceType } = req.body || {};

  if (!name || !email || !phone || !details) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
    return;
  }

  try {
    // Basic quote submission logic
    const quoteData = {
      id: `quote_${Date.now()}`,
      name,
      email,
      phone,
      details,
      serviceType: serviceType || 'General Inquiry',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real implementation, you would:
    // 1. Save the quote to your database
    // 2. Send confirmation emails
    // 3. Notify your sales team

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      quoteId: quoteData.id,
      message: 'Quote request submitted successfully'
    }));
  } catch {
    // console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: undefined
    }));
  }
}

export default withErrorLogging(handler);
