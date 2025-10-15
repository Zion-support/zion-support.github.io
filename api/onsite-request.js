import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, message, service } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
    
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
    requests.push({ 
      name, 
      email, 
      company: company || '', 
      phone: phone || '', 
      message: message || '', 
      service: service || '',
      requestedAt: new Date().toISOString() 
    });
    
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ success: true, message: 'Onsite request submitted successfully' });
  } catch (err) {
    console.error('Error in onsite request handler:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}