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
      subscribedAt: new Date().toISOString()
    };

    // In a real application, you would save this to a database
    res.status(200).json({ success: true, subscription });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: 'Subscription failed' });
  }
}

module.exports = withSentry(handler);