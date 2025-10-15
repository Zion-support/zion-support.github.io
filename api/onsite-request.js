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

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and message are required' });
      return;
    }

    const requestData = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      phone: phone || '',
      message,
      serviceType: serviceType || 'General Consultation',
      preferredDate: preferredDate || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

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

    // Add new request
    requests.push(requestData);

    // Write back to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ 
      success: true, 
      message: 'Request submitted successfully',
      requestId: requestData.id
    });

  } catch (error) {
    console.error('Error processing onsite request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
