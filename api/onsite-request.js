import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
<<<<<<< HEAD
  }

  try {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully'
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}
  
  try {
<<<<<<< HEAD
    const { name, email, company, message } = req.body;
    
    if (!name || !email || !company || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
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
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    };
    
    requests.push(newRequest);
    
    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.status(200).json({ success: true, message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Error saving onsite request:', error);
    res.status(500).json({ error: 'Failed to save request' });
  }
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f3b2
    const { name, email, company, phone, service, message } = req.body;
=======
  }

  try {
    const { name, email, company, phone, address, service, message, preferredDate } = req.body;
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2

    if (!name || !email || !company || !phone || !address) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Name, email, company, phone, and address are required' 
      }));
      return;
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

    // Add new request
    const newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      address,
      service: service || 'General Consultation',
      message: message || '',
      preferredDate: preferredDate || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    requests.push(newRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: newRequest.id
    }));
  } catch (error) {
    console.error('Onsite request error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Failed to submit onsite request' 
    }));
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-20d2
