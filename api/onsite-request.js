const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];

  try {
    const data = fs.readFileSync(file, 'utf8');
    existing = JSON.parse(data);
  } catch (err) {
    // File doesn't exist or is invalid, start with empty array
    console.log('No existing data found, starting fresh:', err.message);
  }

  const newRequest = {
    name,
    email,
    company,
    message,
    timestamp: new Date().toISOString()
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true });
}

module.exports = withSentry(handler);