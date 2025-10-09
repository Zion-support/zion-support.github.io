const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone,
    company,
    message,
    preferredDate,
    serviceType
  } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
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
    console.warn('Could not read existing requests file:', err.message);
    // File doesn't exist or is empty, start with empty array
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    company,
    message,
    preferredDate,
    serviceType,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true, message: 'Onsite request submitted successfully' });
}

module.exports = withSentry(handler);