import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { name, email, phone, details, serviceType, budget } = req.body || {};
=======
  const { name, email, phone, details, serviceType } = req.body || {};
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf

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
<<<<<<< HEAD
      serviceType: serviceType || 'General Inquiry',
      budget: budget || 'Not specified',
=======
      serviceType: serviceType || 'general',
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real implementation, you would:
    // 1. Validate the data
    // 2. Store the quote in your database
<<<<<<< HEAD
    // 3. Send confirmation emails
    // 4. Notify your team
=======
    // 3. Send notification emails
    // 4. Return confirmation
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quoteData.id
    }));
  } catch (error) {
<<<<<<< HEAD
    // console.error('Quote submission error:', error);
=======
    console.error('Quote submission error:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: typeof process !== 'undefined' && process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);