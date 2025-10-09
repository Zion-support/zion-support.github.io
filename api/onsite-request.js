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
    company,
    phone,
    message,
    serviceType,
    budget,
    timeline
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
    if (fs.existsSync(file)) {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (err) {
    // File doesn't exist or is invalid, start with empty array
    console.log('No existing data found, starting fresh:', err.message);
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company: company || '',
    phone: phone || '',
    message: message || '',
    serviceType: serviceType || '',
    budget: budget || '',
    timeline: timeline || '',
    timestamp: new Date().toISOString()
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true, message: 'Request submitted successfully' });
}

module.exports = withSentry(handler);