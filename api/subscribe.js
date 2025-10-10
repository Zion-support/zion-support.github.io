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

    let existing = [];

    try {
<<<<<<< HEAD
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array;
    }

    existing.push({)
      email)
      name: name || ''),
      source),
=======
      if (fs.existsSync(file)) {
        existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      }
    } catch (error) {
      console.error('Error reading existing subscriptions:', error);
    }

    existing.push({
      email,
      name,
      source,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      subscribedAt: new Date().toISOString(),
      status: 'active'
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Subscription error:', err);
    res.status(500).json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = { handler };