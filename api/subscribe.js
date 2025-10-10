<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
=======
const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
>>>>>>> origin/main

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'subscribers.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
<<<<<<< HEAD
  }

  const { email, name, preferences } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
=======
>>>>>>> origin/main
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
<<<<<<< HEAD
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (error) {
    console.error('Error reading existing subscribers:', error);
    existing = [];
  }

  // Check if email already exists
  const existingSubscriber = existing.find(sub => sub.email === email);
  if (existingSubscriber) {
    return res.status(400).json({ error: 'Email already subscribed' });
  }

  const newSubscriber = {
    id: Date.now().toString(),
    email,
    name: name || '',
    preferences: preferences || {},
    timestamp: new Date().toISOString(),
    status: 'active'
  };

  existing.push(newSubscriber);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
=======
    const { email } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Email is required' }));
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

    // Save subscription logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 3. Send confirmation email

    console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });

>>>>>>> origin/main
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
<<<<<<< HEAD
      id: newSubscriber.id
    }));
  } catch (error) {
    console.error('Error saving subscriber:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save subscription' }));
  }
}
=======
      email 
    }));

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe to newsletter',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

module.exports = withSentry(handler);
>>>>>>> origin/main
