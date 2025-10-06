const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email' });
      return;
    }
    const file = path.join(
      process.cwd(),
      'data',
      'newsletter-subscriptions.json',
    );
>>>>>>> cursor/fix-errors-and-merge-to-main-bd65
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
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
  } catch (err) {
    console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
  }
}
module.exports = withSentry(handler);