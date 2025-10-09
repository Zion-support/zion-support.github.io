const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');
    const dir = path.dirname(file);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let existing = [];

    try {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
    } catch {
      // File doesn't exist or is empty, start with empty array
    }

    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };
