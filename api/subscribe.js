const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  try {
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

    const file = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let existing = [];
    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        existing = JSON.parse(data);
        if (!Array.isArray(existing)) {
          existing = [];
        }
      }
    } catch (error) {
      console.error('Error reading existing subscriptions:', error);
      existing = [];
    }

    const subscription = {
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    existing.push(subscription);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to newsletter',
      subscription
    }));
  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
  }
}

module.exports = handler;