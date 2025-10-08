const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');
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
=======

>>>>>>> origin/main
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b

  try {
    const { email } = req.body || {};
    
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
=======

  try {
    const { email, name, source = 'website' } = req.body || {};

    if (!email) {
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

>>>>>>> origin/main
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }
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
=======

>>>>>>> origin/main
    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json'
    );
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
    let existing = [];
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
=======

    let existing = [];

>>>>>>> origin/main
    try {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      // File doesn't exist or is invalid, use empty array
    }
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
=======

    existing.push({
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
    });
>>>>>>> origin/main

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}
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
=======

module.exports = withSentry(handler);
>>>>>>> origin/main
