import { withErrorLogging } from './withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, source = 'website', interests = [] } = req.body || {};

  if (!email || !email.includes('@')) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Valid email address is required' }));
    return;
  }

  try {
    // Basic subscription processing logic
    const subscription = {
      id: 'sub_' + Date.now(),
      email: email.toLowerCase().trim(),
      name: name || '',
      source,
      interests: Array.isArray(interests) ? interests : [],
      status: 'active',
      subscribedAt: new Date().toISOString(),
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    // Log subscription for processing
    console.log('Subscription Request:', subscription);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to updates',
      subscription: {
        id: subscription.id,
        email: subscription.email,
        status: subscription.status,
        interests: subscription.interests
      }
    }));
  } catch (error) {
    console.error('Subscription processing error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to process subscription' }));
  }
}

export default withErrorLogging(handler);