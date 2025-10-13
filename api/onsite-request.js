import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, company, phone, service, message, preferredDate, preferredTime } = req.body;

    // Validate required fields
    if (!name || !email || !service) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, and service are required' }));
      return;
    }

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      service,
      message,
      preferredDate,
      preferredTime,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    requests.push(newRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    // Send confirmation email (in production, you would use a real email service)
    console.log('Onsite request received:', newRequest);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully!',
      requestId: newRequest.id
    }));

  } catch (error) {
    console.error('Error processing onsite request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Internal server error',
      message: 'Failed to submit onsite request. Please try again later.'
    }));
  }
}