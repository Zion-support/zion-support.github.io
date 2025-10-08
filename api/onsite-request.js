const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const {
    name,
    email,
    phone,
    company,
    location,
    details,
  } = req.body || {};

  if (!name || !email || !location) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields' });
    return;
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  let existing = [];

  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array
  }

  existing.push({
    name,
    email,
    phone,
    company,
    location,
    details,
    timestamp: new Date().toISOString(),
  });

  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.json({ success: true, message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Error saving request:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to save request' });
  }
}

module.exports = withSentry(handler);