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
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        existing = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error reading existing subscriptions:', error);
    }

    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ error: error.message || 'Subscription failed' });
  }
}

module.exports = { handler };