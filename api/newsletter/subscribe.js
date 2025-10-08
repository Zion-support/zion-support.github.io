const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
  try {
    const { email } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email format' });
      return;
    }
    // Save subscription logic here
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    res.statusCode = 200;
    res.json({
      message: 'Successfully subscribed to newsletter',
      subscription,
    });
  } catch {
    //     res.statusCode = 500;
    res.json({ error: 'Failed to subscribe to newsletter' });
  }
}

export default withSentry(handler);
