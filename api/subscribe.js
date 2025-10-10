const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'subscribers.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, preferences } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      res.statusCode = 409;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Email already subscribed',
        message: 'This email is already subscribed to our newsletter'
      }));
      return;
    }

    // Add new subscriber
    const newSubscriber = {
      id: `sub_${Date.now()}`,
      email,
      name: name || 'Anonymous',
      preferences: preferences || {},
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    subscribers.push(newSubscriber);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      subscriber: newSubscriber
    }));

  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to subscribe',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}