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
    // Store subscription in a JSON file
    const dataDir = path.join(process.cwd(), 'data');
    const file = path.join(dataDir, 'subscribers.json');

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing subscribers
    let existing = [];
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(content);
    }

    // Check if email already exists
    if (existing.some(sub => sub.email === email)) {
      res.statusCode = 200;
      res.json({ success: true, message: 'Already subscribed' });
      return;
    }

    // Add new subscriber
    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
    });

    // Save to file
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