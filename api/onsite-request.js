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
    const { name, email, company, phone, message, serviceType, preferredDate } = req.body;

    // Validate required fields
    if (!name || !email || !company || !phone) {
      return res.status(400).json({ 
        error: 'Name, email, company, and phone are required' 
      });
    }

    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Load existing requests
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Create new request
    const newRequest = {
      id: Date.now().toString(),
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    requests.push(newRequest);

    // Save updated requests
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit onsite request',
      message: error.message 
    });
  }
}