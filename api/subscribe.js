const fs = require('fs');
const path = require('path');
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email, name, source } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    let existing = [];

    if (fs.existsSync(file)) {
      existing = JSON.parse(fs.readFileSync(file, 'utf-8'));
    }

    if (existing.find(sub => sub.email === email)) {
      res.statusCode = 200;
      res.json({ success: true, message: 'Already subscribed' });
      return;
    }

    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withSentry(handler);
