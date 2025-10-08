const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}














async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
  try {
    const { email } = req.body || {};

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.json({ error: 'Email is required' });
    return;
  }

  try {
    const { email } = req.body || {};
    
    

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};

  try {
    const { email } = req.body || {};
    

  try {
    const { email } = req.body || {};
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }














    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json'
    );
    
    
    
    
    let existing = [];
    
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    
    let existing = [];
    
    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }














    existing.push({
      email,
      subscribedAt: new Date().toISOString()
    });
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });

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

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
  } catch (error) {
    console.error('Subscribe API error:', error);
  } catch (error) {
  } catch (error) {

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}













module.exports = withSentry(handler);