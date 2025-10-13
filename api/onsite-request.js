<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

// Simple wrapper function to replace withSentry
// const withSentry = (handler) => handler;

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

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error reading existing requests:', error);
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

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  try {
    const {
      name,
      email,
      phone,
      company,
      location,
      details
    } = req.body || {};

    if (!name || !email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name and email are required' }));
      return;
    }

    // Process onsite request
    // In a real application, you would:
    // 1. Save to your database
    // 2. Send notification to your team
    // 3. Send confirmation email to the customer
    // 4. Schedule the onsite visit

    const onsiteData = {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      location: location || 'Not specified',
      details: details || 'No additional details',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Log the request (in production, save to database)
    console.log('Onsite request received:', onsiteData);

>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
<<<<<<< HEAD
      id: newRequest.id
    }));
  } catch (_error) { // eslint-disable-line no-unused-vars
    // console.error('Error saving onsite request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}
=======
      requestId: `onsite_${Date.now()}`,
      data: onsiteData
    }));

  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit onsite request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }));
  }
}

module.exports = withSentry(handler);
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
module.exports = handler;

