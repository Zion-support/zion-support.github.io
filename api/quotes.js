import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, phone, details, company, projectType } = req.body || {};

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
      company: company || null,
      projectType: projectType || 'general',
      status: 'pending',
      timestamp: new Date().toISOString()
    };

    // In a real implementation, you would:
    // 1. Validate the data
    // 2. Store the quote request in your database
    // 3. Send notification emails
    // 4. Return confirmation

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quoteData.id
    }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);