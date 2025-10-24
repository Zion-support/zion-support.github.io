<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const withSentry = require('./withSentry.cjs');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default async function handler(req, res) {
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> cursor/delete-records-30ea
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
=======
  try {
    const {
      name,
      email,
      phone,
      company,
      location,
      details
    } = req.body || {};
>>>>>>> cursor/delete-records-30ea

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      
      // Validate required fields
      if (!data.name || !data.email || !data.company || !data.message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Missing required fields' }));
        return;
      }

      // Ensure data directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Read existing data
      let requests = [];
      if (fs.existsSync(file)) {
        try {
          const fileContent = fs.readFileSync(file, 'utf8');
          requests = JSON.parse(fileContent);
        } catch (error) {
          console.error('Error reading existing data:', error);
        }
      }

      // Add new request
      const newRequest = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...data
      };

      requests.push(newRequest);

      // Write back to file
      fs.writeFileSync(file, JSON.stringify(requests, null, 2));

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        success: true, 
        message: 'Request submitted successfully',
        id: newRequest.id
      }));

    } catch (error) {
      console.error('Error processing request:', error);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
<<<<<<< HEAD
  });
}

module.exports = withSentry(handler);
=======

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
      status: 'pending',
    };

    // Log the request (in production, save to database)
    console.log('Onsite request received:', onsiteData);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
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
module.exports = handler;

>>>>>>> cursor/delete-records-30ea
