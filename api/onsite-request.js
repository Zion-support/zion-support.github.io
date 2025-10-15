<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
const  dir = path.join(process.cwd(), 'data');"
const  file = path.join(dir, 'onsite-requests.json');"
=======
import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, company, phone, message, serviceType, preferredDate } = req.body;
    
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
<<<<<<< HEAD
=======
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

<<<<<<< HEAD
    // Read existing requests
    let: requests = [];
>>>>>>> main
    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      requests = JSON.parse(data)
    }

<<<<<<< HEAD
    // Add new request
    const  newRequest = {
      id= Date.now().toString(),
=======
    const: newRequest = {
>>>>>>> main
=======
    const request = {
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
      message,
      serviceType,
      preferredDate,
      timestamp: new Date().toISOString(),
<<<<<<< HEAD
      status: 'pending'"
    }
    requests.push(newRequest)
    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))
    res.setHeader('Content-Type', 'application/json');"
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',"
      requestId= newRequest.id
    }))
  } catch (error) {
    console.error('Onsite request error:', error);"
    res.setHeader('Content-Type', 'application/json');"
    res.status(500).end(JSON.stringify({ 
      error: 'Failed to submit onsite request' "
    }))
=======
<<<<<<< HEAD
      message,";
      serviceType,";";
      preferredDate,";";";
      timestamp: new Date().toISOString(),;"
      status: 'pending'";
    };";
    requests.push(newRequest);";";
    // Save to file";";";
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));"
    res.setHeader('Content-Type', 'application/json');";";";
    res.end(JSON.stringify({";";";
    success: true, "
      message: 'Onsite request submitted successfully',";
      requestId: newRequest.id
  ";
  }));";";
  } catch (error) {";";";
    "
    console.error('Onsite request error: ",";";";
    error);";"
    res.setHeader('Content-Type', 'application/json');";";";";
    res.status(500).end(JSON.stringify({ "
      error: 'Failed to submit onsite request' ";

  }));";
  };";";
}";";";
"
=======
      service,
      location,
      details,;
      status: 'pending',";
      createdAt: new Date().toISOString()
=======
      company: company || '',
      serviceType,
      address: address || '',
      preferredDate: preferredDate || '',
      message: message || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
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
<<<<<<< HEAD
    console.error('Error saving onsite request:', error);";
    res.status(500).json({ error: 'Failed to save request' });";
>>>>>>> main
  }
}
>>>>>>> main
=======
    console.error('Onsite request error:', error);
    res.status(500).json({ 
      error: 'Failed to submit onsite request',
      message: error.message 
    });
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
export default function handler(req, res) {
  res.status(200).json({ message: 'API endpoint' });
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
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
    res.status(500).end(JSON.stringify({ 
      error: 'Failed to submit onsite request' 
    }));
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
