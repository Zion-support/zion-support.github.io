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

  if (!name || !email || !phone) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name, email, and phone are required' }));
    return;
  }

  try {
    const newRequest = {
      id: 'onsite_' + Date.now(),
      name,
      email,
      company,
      phone,
      message,
      location,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
    const dir = path.dirname(file);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let existing = [];
    if (fs.existsSync(file)) {
      try {
        existing = JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch (error) {
        console.error('Error reading existing requests:', error);
        existing = [];
      }
    }

    existing.push(newRequest);

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