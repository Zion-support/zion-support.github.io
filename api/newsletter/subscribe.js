const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
  try {
    const { email } = req.body || {};

    if (!email) {
    };

    res.statusCode = 200;
    res.json({ success: true, subscription });
  } catch (err) {
    console.error("Error:", err);
    console.error('Error subscribing to newsletter:', err);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}

export default withSentry(handler);