const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');












  const {
    name,
    email,
    phone: _phone,
    company: _company,
    location,
    details: _details,
  } = req.body || {};













  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array
  }












  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true });
}











module.exports = withSentry(handler);

module.exports = withSentry(handler);
