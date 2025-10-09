const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      source: 'newsletter'
    };

    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter', subscription });
  } catch (err) {
    console.error('Failed to subscribe to newsletter:', err);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}

module.exports = withSentry(handler);