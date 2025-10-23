import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, company, phone, message, serviceType, preferredDate } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, 'utf8');
        requests = JSON.parse(data);
      }
    } catch (error) {
      console.error('Error reading existing requests:', error);
      requests = [];
    }

    // Add new request
    const newRequest = {
id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      serviceType,
      preferredDate,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    requests.push(newRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ 
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id 
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
