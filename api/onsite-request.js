const fs = require('fs');
const path = require('path');

// Simple wrapper function to replace withSentry
const withSentry = (handler) => handler;

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

  if (!name || !email || !message) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Missing required fields' }));
    return;
  }

  const requestData = {
    id: Date.now().toString(),
    name,
    email,
    company: company || '',
    phone: phone || '',
    message,
    location: location || '',
    timestamp: new Date().toISOString(),
    status: 'pending'
  };

  try {
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing data
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Add new request
    requests.push(requestData);

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Request submitted successfully',
      id: requestData.id
    }));
  } catch (error) {
    console.error('Error saving request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = withSentry(handler);
