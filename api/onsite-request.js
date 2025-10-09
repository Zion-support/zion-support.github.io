const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message } = req.body || {};

  if (!name || !email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name and email are required' }));
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
  } catch {
    // File doesn't exist or is invalid, start with empty array
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    createdAt: new Date().toISOString()
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true, request: newRequest });
}

module.exports = withSentry(handler);
