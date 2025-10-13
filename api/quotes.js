import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, details, serviceType, budget } = req.body || {};

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
      budget: budget || 'Not specified',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real implementation, you would:
    // 1. Validate the data
    // 2. Store the quote in your database
    // 3. Send confirmation emails
    // 4. Notify your team

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quoteData.id
    }));
  } catch (error) {
    // console.error('Quote submission error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: typeof process !== 'undefined' && process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);