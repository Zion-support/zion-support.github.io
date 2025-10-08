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

  const { email } = req.body || {};

  if (!email || !email.includes('@')) {
    res.statusCode = 400;
    res.json({ error: 'Valid email is required' });
    return;
  }

  const file = path.join(process.cwd(), 'data', 'subscribers.json');
  let existing = [];

  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array
  }

  // Check if email already exists
  if (existing.some(sub => sub.email === email)) {
    res.statusCode = 409;
    res.json({ error: 'Email already subscribed' });
    return;
  }

  existing.push({
    email,
    subscribedAt: new Date().toISOString(),
  });

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true, message: 'Successfully subscribed' });
}

module.exports = withSentry(handler);