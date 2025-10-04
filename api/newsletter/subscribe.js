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

    // Save to file (in production, use a database)
    const subscribersFile = path.join(process.cwd(), 'data', 'subscribers.json');
    const subscribersDir = path.dirname(subscribersFile);
    
    if (!fs.existsSync(subscribersDir)) {
      fs.mkdirSync(subscribersDir, { recursive: true });
    }

    let subscribers = [];
    if (fs.existsSync(subscribersFile)) {
      const data = fs.readFileSync(subscribersFile, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      res.statusCode = 409;
      res.json({ error: 'Email already subscribed' });
      return;
    }

    subscribers.push(email);
    fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));

    res.statusCode = 200;
    res.json({ message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}

module.exports = withSentry(handler);