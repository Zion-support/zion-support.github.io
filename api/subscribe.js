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
      res.json({ error: 'Invalid email' });
      return;
    }

    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json'
    );

    let existing = [];

    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    // Check if email already exists
    const existingSubscriber = existing.find((sub) => sub.email === email);
    if (existingSubscriber) {
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

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));

    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscribe failed' });
  }
}

module.exports = withSentry(handler);