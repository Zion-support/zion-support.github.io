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
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

<<<<<<< HEAD
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
=======
    // Save email to file (in production, use a database)
    const subscribersFile = path.join(process.cwd(), 'subscribers.json');
    let subscribers = [];
    
    if (fs.existsSync(subscribersFile)) {
      const data = fs.readFileSync(subscribersFile, 'utf8');
      subscribers = JSON.parse(data);
    }

    if (subscribers.includes(email)) {
>>>>>>> cursor/fix-errors-and-merge-to-main-0588
      res.status(409).json({ error: 'Email already subscribed' });
      return;
    }

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
    subscribers.push(email);
    fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));

    res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      email 
    });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ error: 'Internal server error' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0588
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8302
  }
}

module.exports = withSentry(handler);