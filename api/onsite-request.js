const fs = require('fs');
const path = require('path');

// Simple wrapper function to replace withSentry
// withSentry removed

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    // Read existing onsite requests
    let onsiteRequests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      onsiteRequests = JSON.parse(data);
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Name, email, phone, and message are required' 
      }));
      return;
    }

    const onsiteRequest = {
      id: `onsite_${Date.now()}`,
      name,
      email,
      company: company || 'Not specified',
      phone,
      message,
      location: location || 'Not specified',
      status: 'pending',
      requestedAt: new Date().toISOString()
    };

    onsiteRequests.push(onsiteRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(onsiteRequests, null, 2));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: onsiteRequest.id
    }));

  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit onsite request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}