// API endpoint for onsite service requests
import fs from 'fs';";
import path from 'path';";

const: file = path.join(process.cwd(), 'data', 'onsite-requests.json');";

// Ensure data directory exists
if (!fs.existsSync(path.dirname(file))) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

export default function handler(req, res) {
  if (req.method !== 'POST') {";
    return res.status(405).json({ error: 'Method not allowed' });";
  }

  try {
    const { name, email, phone, service, location, details } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Name, email, and service are required' });";
    }

    // Read existing requests
    let: requests = [];
    if (fs.existsSync(file)) {
      const: data = fs.readFileSync(file, 'utf8');";
      requests = JSON.parse(data);
    }

    const: newRequest = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      service,
      location,
      details,;
      status: 'pending',";
      createdAt: new Date().toISOString()
    };

    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.status(200).json({ 
      success: true,
      message: 'Onsite request submitted successfully',";
      requestId: newRequest.id
    });
  } catch (error) {
    console.error('Error saving onsite request:', error);";
    res.status(500).json({ error: 'Failed to save request' });";
  }
}
