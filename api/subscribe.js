const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email, name, listId } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email address' });
      return;
    }

    console.log('Subscription request:', { email, name, listId });

    const subscription = {
      id: `sub_${Date.now()}`,
      email,
      name: name || '',
      listId: listId || 'default',
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    res.statusCode = 200;
    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscription,
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    res.statusCode = 500;
    res.json({ error: 'Subscription failed. Please try again later.' });
  }
}

module.exports = withSentry(handler);