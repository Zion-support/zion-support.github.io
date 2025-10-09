const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { email } = req.body || {};

    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString()
    };

    res.statusCode = 200;
    res.json({ success: true, subscription });
  } catch (err) {
    console.error('Error subscribing to newsletter:', err);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}

export default withSentry(handler);