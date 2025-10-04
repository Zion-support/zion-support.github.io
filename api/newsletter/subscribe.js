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
<<<<<<< HEAD
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
=======
      res.status(400).json({ error: 'Email is required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef
      return;
    }

    if (!isValidEmail(email)) {
<<<<<<< HEAD
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
=======
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    // Save subscription to file (in production, use a database)
    const subscriptionsPath = path.join(process.cwd(), 'data', 'newsletter-subscriptions.json');
    
    // Ensure data directory exists
    const dataDir = path.dirname(subscriptionsPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing subscriptions
    let subscriptions = [];
    if (fs.existsSync(subscriptionsPath)) {
      const data = fs.readFileSync(subscriptionsPath, 'utf8');
      subscriptions = JSON.parse(data);
    }

    // Check if email already exists
    if (subscriptions.some(sub => sub.email === email)) {
      res.status(409).json({ error: 'Email already subscribed' });
      return;
    }

    // Add new subscription
    const subscription = {
      email,
      subscribedAt: new Date().toISOString(),
      id: `sub_${Date.now()}`
    };

    subscriptions.push(subscription);

    // Save subscriptions
    fs.writeFileSync(subscriptionsPath, JSON.stringify(subscriptions, null, 2));

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscription
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to subscribe to newsletter' 
    });
>>>>>>> cursor/fix-errors-and-merge-to-main-e7ef
  }
}

module.exports = withSentry(handler);