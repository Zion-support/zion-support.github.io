const fs = require('fs');
const path = require('path');

// Simple wrapper function to replace withSentry
function withSentry(handler) {
  return handler;
}

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, company, phone, message, service } = req.body;

    if (!name || !email || !company) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Missing required fields' }));
      return;
    }

    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Create new request
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone: phone || '',
      message: message || '',
      service: service || '',
      timestamp: new Date().toISOString()
    };

    // Add to requests array
    requests.push(newRequest);

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      id: newRequest.id 
    }));
  } catch (error) {
    console.error('Error saving onsite request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: false, 
      error: 'Failed to save request' 
    }));
  }
}

module.exports = withSentry(handler);