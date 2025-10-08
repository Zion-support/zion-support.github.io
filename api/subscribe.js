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
    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    let existing = [];

    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    // Check if email already exists
    if (existing.some((sub) => sub.email === email)) {
      res.statusCode = 200;
      res.json({ success: true, message: 'Already subscribed' });
      return;
    }

    existing.push({
      email,
      name,
      source,
      timestamp: new Date().toISOString(),
    });

    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));

    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to subscribe' });
  }
}

module.exports = withSentry(handler);
