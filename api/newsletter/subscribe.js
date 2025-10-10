import { withErrorLogging } from '../withErrorLogging.cjs';

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, preferences = {} } = req.body || {};

  if (!email || !email.includes('@')) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Valid email address is required' }));
    return;
  }

  try {
    // Basic newsletter subscription logic
    const subscription = {
      id: 'sub_' + Date.now(),
      email: email.toLowerCase().trim(),
      name: name || '',
      preferences,
      status: 'active',
      subscribedAt: new Date().toISOString(),
      source: 'website'
    };

    // Log subscription for processing
    console.log('Newsletter Subscription:', subscription);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to newsletter',
      subscription: {
        id: subscription.id,
        email: subscription.email,
        status: subscription.status
      }
    }));
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
  }
}

export default withErrorLogging(handler);