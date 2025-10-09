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

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const subscription = {
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    // Save to file (in production, use a database)
    const file = path.join(process.cwd(), 'data', 'subscriptions.json');
    const dir = path.dirname(file);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let subscriptions = [];
    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        subscriptions = JSON.parse(data);
      }
    } catch (err) {
      console.error('Error reading subscriptions file:', err);
    }

    // Check if email already exists
    const existingIndex = subscriptions.findIndex(sub => sub.email === email);
    if (existingIndex >= 0) {
      subscriptions[existingIndex] = subscription;
    } else {
      subscriptions.push(subscription);
    }

    fs.writeFileSync(file, JSON.stringify(subscriptions, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      subscription 
    });
  } catch (err) {
    console.error('Error subscribing to newsletter:', err);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
}

module.exports = handler;