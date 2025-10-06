const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
    
>>>>>>> 40f0d19ecc0819e0cd100e68e36dd415011c7be9
=======
    
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

  try {
    const { email } = req.body || {};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

  try {
    const { email } = req.body || {};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

  try {
    const { email } = req.body || {};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

  try {
    const { email } = req.body || {};
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

  try {
    const { email } = req.body || {};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json'
    );
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
    
>>>>>>> 40f0d19ecc0819e0cd100e68e36dd415011c7be9
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
    let existing = [];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
    
    let existing = [];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    existing.push({
      email,
      subscribedAt: new Date().toISOString()
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
    
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
    
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
    
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
module.exports = withSentry(handler);