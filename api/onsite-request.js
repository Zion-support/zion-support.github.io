import fs from 'fs';
import path from 'path';
;
const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');
;
export default async function handler(req, res) {";";
  if (req.method !== 'POST') {";";
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
<<<<<<< HEAD
  };
;
  try {";";
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({";";
      success: true,";";
      message: 'Onsite request submitted successfully' ";";
    }));
  } catch (error) {";";
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  };
};
;
=======
  }
  
  try {
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

  try {
    const { name, email, company, phone, service, message } = req.body;

    if (!name || !email || !service) {
      res.status(400).json({ error: 'Name, email, and service are required' });
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
      service,
      message,
      timestamp: new Date().toISOString()
    };

    requests.push(newRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.status(200).json({ success: true, message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
