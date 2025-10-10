import { withErrorLogging } from './withErrorLogging.cjs';

const PROD_DOMAIN = 'https://ziontechgroup.com';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { 
    email, 
    firstName, 
    lastName, 
    company, 
    interests = [],
    newsletter = true,
    updates = true
  } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid email format' }));
    return;
  }

  try {
    // Basic subscription processing logic
    const subscriptionData = {
      email,
      firstName: firstName || '',
      lastName: lastName || '',
      company: company || '',
      interests: Array.isArray(interests) ? interests : [],
      newsletter: Boolean(newsletter),
      updates: Boolean(updates),
      timestamp: new Date().toISOString(),
      status: 'active',
      subscriptionId: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    // In a real implementation, you would:
    // 1. Validate the email address
    // 2. Check if the email is already subscribed
    // 3. Store the subscription in your database
    // 4. Add to your email marketing platform (Mailchimp, ConvertKit, etc.)
    // 5. Send welcome email
    // 6. Update analytics

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Successfully subscribed to our newsletter',
      subscriptionId: subscriptionData.subscriptionId,
      data: subscriptionData
    }));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to process subscription',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

export default withErrorLogging(handler);