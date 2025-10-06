const { withSentry } = require('./withSentry.cjs');
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
    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    let subscribers = [];

    try {
      subscribers = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(subscribers)) subscribers = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      res.statusCode = 409;
      res.json({ error: 'Email already subscribed' });
      return;
    }

    subscribers.push({
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Subscribe API error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to subscribe to newsletter' });
  }
}

module.exports = withSentry(handler);