const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  try {
    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email' });
      return;
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');
    const dir = path.dirname(file);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let existing = [];

    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    // File doesn't exist or is invalid, start with empty array
  }

    const subscription = {
      id: Date.now().toString(),
      email,
      name,
      source,
      timestamp: new Date().toISOString(),
      status: 'active'
    };

    existing.push(subscription);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true, subscriptionId: subscription.id });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };
