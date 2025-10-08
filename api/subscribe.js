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
    res.json({ error: 'Invalid email format' });
    return;
  }

  try {
    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    let existing = [];

    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    if (existing.some(sub => sub.email === email)) {
      res.statusCode = 409;
      res.json({ error: 'Email already subscribed' });
      return;
    }

    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
    });

    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

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
