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

  const { name, email, company, phone, message, location } = req.body || {};

  if (!name || !email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name and email are required' }));
    return;
  }

  try {
    const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
    let existing = [];

    try {
      if (fs.existsSync(file)) {
        existing = JSON.parse(fs.readFileSync(file, 'utf8'));
        if (!Array.isArray(existing)) existing = [];
      }
    } catch (error) {
      console.error('Error reading existing requests:', error);
      existing = [];
    }

    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      location,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    existing.push(newRequest);

    // Ensure directory exists
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(file, JSON.stringify(existing, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id
    }));
  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit onsite request' }));
  }
}

module.exports = withSentry(handler);