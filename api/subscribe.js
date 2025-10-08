const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
=======












>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1035
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.json({ error: 'Email is required' });
    return;
  }

  try {
<<<<<<< HEAD
=======
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

  try {
    const { email, name, source = 'website' } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1035
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }

<<<<<<< HEAD
=======












>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1035
    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json'
    );
<<<<<<< HEAD
=======
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    
    let existing = [];
    
    let existing = [];
    
    let existing = [];
    
    
    let existing = [];
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1035

    let existing = [];

    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }
<<<<<<< HEAD
=======












    existing.push({
      email,
      subscribedAt: new Date().toISOString()
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
  } catch (error) {
    console.error('Subscribe API error:', error);
  } catch (error) {
  } catch (error) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1035

    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
    });

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}

<<<<<<< HEAD
module.exports = withSentry(handler);
=======










module.exports = withSentry(handler);

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1035
