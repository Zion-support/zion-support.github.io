const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    
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

    // Store email in database or file
    const dataPath = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');
    let subscribers = [];
    
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      res.statusCode = 200;
      res.json({ message: 'Email already subscribed' });
      return;
    }

    subscribers.push(email);
    fs.writeFileSync(dataPath, JSON.stringify(subscribers, null, 2));

    res.statusCode = 200;
    res.json({ message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.statusCode = 500;
    res.json({ error: 'Subscription failed' });
  }
}

module.exports = withSentry(handler);
