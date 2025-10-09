const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
<<<<<<< HEAD
    res.status(400).json({ error: 'Email is required' });
    return;
=======
    return res.status(400).json({ error: 'Email is required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
  }

  try {
    if (!isValidEmail(email)) {
<<<<<<< HEAD
      res.status(400).json({ error: 'Invalid email' });
      return;
=======
      return res.status(400).json({ error: 'Invalid email format' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');

    let existing = [];

    try {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
    } catch (err) {
      // File doesn't exist or is invalid, start with empty array
      console.log('No existing subscriptions found, starting fresh:', err.message);
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
    console.error('Error subscribing:', err);
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };