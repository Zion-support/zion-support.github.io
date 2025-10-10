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
    const requestData = {
      id: 'onsite_' + Date.now(),
      name,
      email,
      phone,
      company,
      location,
      details,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Save to file (in production, this would be saved to a database)
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, 'onsite-requests.json');
    let requests = [];
    
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      requests = JSON.parse(fileContent);
    }

    requests.push(requestData);
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));

    // Send confirmation email (in production, this would use a real email service)
    // console.log('Onsite request received:', requestData);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: requestData.id
    }));
  } catch {
    // console.error('Error processing onsite request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

export default withSentry(handler);