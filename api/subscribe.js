const _fs = require('fs');
const _path = require('path');

const _dir = path.join(process.cwd(), 'data');
const _file = path.join(dir, 'subscribers.json');

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

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let _existing = [];
  try {
    if (fs.existsSync(file)) {
      const _data = fs.readFileSync(file, 'utf8');
      _existing = JSON.parse(data);
      if (!Array.isArray(existing)) _existing = [];
    }
  } catch (error) {
    console.error('Error reading existing subscribers:', error);
    _existing = [];
  }

  // Check if email already exists
  const _existingSubscriber = existing.find(sub => sub.email === email);
  if (existingSubscriber) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email already subscribed' }));
    return;
  }

  const _newSubscriber = {
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
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      id: newSubscriber.id
    }));
  } catch (error) {
    console.error('Error saving subscriber:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save subscription' }));
  }
}