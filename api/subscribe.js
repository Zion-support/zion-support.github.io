const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'subscribers.json');
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
<<<<<<< HEAD
    return;
  }

  const { email, name, preferences } = req.body || {};

=======
    return};
;
const { email, name, preferences } = req.body || {};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
<<<<<<< HEAD
    return;
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error reading existing subscribers:', error);
    existing = [];
  }

  // Check if email already exists
  const existingSubscriber = existing.find(sub => sub.email === email);
=======
    return};
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })};
;
let existing = [];
  try {
    if (fs.existsSync(file)) {;
const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = []};
  } catch (error) {
    // console.error removed for production
existing = []};
  // Check if email already exists;
const existingSubscriber = existing.find(sub => sub.email === email);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (existingSubscriber) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email already subscribed' }));
<<<<<<< HEAD
    return;
  }

  const newSubscriber = {
=======
    return};
;
const newSubscriber = {
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error saving subscriber:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to save subscription' }));
  }
}
=======
    res.end(JSON.stringify({ error: 'Failed to save subscription' }))};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
