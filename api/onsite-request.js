// API endpoint for onsite service requests
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'onsite-requests.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      serviceType, 
      address, 
      preferredDate, 
      message 
    } = req.body;

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ 
        error: 'Name, email, phone, and service type are required' 
      });
    }

    const request = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company: company || '',
      serviceType,
      address: address || '',
      preferredDate: preferredDate || '',
      message: message || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    }

    // Add new request
    requests.push(request);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ 
      success: true,
      message: 'Onsite service request submitted successfully',
      requestId: request.id
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit onsite request',
      message: error.message 
    });
  }
}
