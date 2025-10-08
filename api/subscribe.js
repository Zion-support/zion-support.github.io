const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.json({ error: 'Email is required' });
    return;
  }

  if (!isValidEmail(email)) {
    res.statusCode = 400;
    res.json({ error: 'Invalid email address' });
    return;
  }

  try {
    // Mock subscription - in production, this would integrate with a real service
    const subscriber = {
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };

    // Log to file (mock implementation)
    const subscriptionsDir = path.join(process.cwd(), '.data');
    const subscriptionsFile = path.join(subscriptionsDir, 'subscribers.json');

    // Ensure directory exists
    if (!fs.existsSync(subscriptionsDir)) {
      fs.mkdirSync(subscriptionsDir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(subscriptionsFile)) {
      const data = fs.readFileSync(subscriptionsFile, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if already subscribed
    if (subscribers.some(sub => sub.email === email)) {
      res.statusCode = 200;
      res.json({ success: true, message: 'Already subscribed', subscriber });
      return;
    }

    // Add new subscriber
    subscribers.push(subscriber);
    fs.writeFileSync(subscriptionsFile, JSON.stringify(subscribers, null, 2));

    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed', subscriber });
  } catch (error) {
    console.error('Subscribe error:', error);
    res.statusCode = 500;
    res.json({ error: 'Subscription failed' });
  }
}

module.exports = withSentry(handler);