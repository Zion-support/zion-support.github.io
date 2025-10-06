const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  try {
    const { email } = req.body || {};
=======
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.json({ error: 'Email is required' });
    return;
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b

  try {
    const { email } = req.body || {};
    
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json',
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
    let existing = [];
    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
    existing.push({
      email,
      subscribedAt: new Date().toISOString()
    });
<<<<<<< HEAD
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
=======

  try {
    const { email, name, source = 'website' } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    const file = path.join(process.cwd(), 'data', 'subscribers.json');
    let subscribers = [];

    try {
      subscribers = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(subscribers)) subscribers = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      res.statusCode = 409;
      res.json({ error: 'Email already subscribed' });
      return;
    }

    subscribers.push({
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(subscribers, null, 2));
    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
  } catch (err) {
    console.error('Subscribe API error:', err);
=======
  } catch (error) {
    console.error('Subscribe API error:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
  } catch (error) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
  } catch (error) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}
module.exports = withSentry(handler);