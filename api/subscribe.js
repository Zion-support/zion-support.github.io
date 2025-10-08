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

  try {
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email format' });
      return;
    }

    // Store subscription
    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    let subscribers = [];

    try {
      subscribers = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(subscribers)) subscribers = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    // Check if already subscribed
    if (subscribers.find(sub => sub.email === email)) {
      res.statusCode = 200;
      res.json({ success: true, message: 'Already subscribed' });
      return;
    }

    subscribers.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed' });
  } catch (err) {
    console.error('Subscribe error:', err);
    res.statusCode = 500;
    res.json({ error: 'Failed to process subscription' });
  }
}

module.exports = withSentry(handler);