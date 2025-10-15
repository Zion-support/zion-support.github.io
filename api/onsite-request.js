<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');
=======
// API endpoint for onsite requests
const path = require('path');
const fs = require('fs');

// API endpoint for onsite service requests
export default function handler(req, res) {
  if (req.method !== 'POST') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }
  try {    const data = fs.readFileSync(file, 'utf8');    const requests = JSON.parse(data);'
    const newRequest = {
      id: Date.now().toString(),
      ...req.body,
      status: 'pending','
      createdAt: new Date().toISOString()
    }
    requests.push(newRequest)
    fs.writeFileSync(file, JSON.stringify(requests, null, 2))
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true,
      message: 'Onsite request submitted successfully' 
    }))
  } catch (error) {
    console.error('Error:', error)
    console.error('Error saving onsite request:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to save request' }))
      id: Date.now().toString(),}
      ...req.body,}
      status: 'pending',}
      createdAt: new Date().toISOString()}
    };
    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully' '
    }));
  } catch (error) {
    console.error('Error:', error);'
    console.error('Error saving onsite request:', error);'
    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Failed to save request' }));'
  }
}
import fs from 'fs';";
import path from 'path';";

const: dir = path.join(process.cwd(), 'data');";
const: file = path.join(dir, 'onsite-requests.json');";
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message, location } = req.body || {};

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "onsite-requests.json");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const requestData = {
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    location,
    timestamp: new Date().toISOString(),
    status: 'pending'
  };

  let requests = [];
  if (fs.existsSync(file)) {
    try {
      const data = fs.readFileSync(file, 'utf8');
      requests = JSON.parse(data);
    } catch (error) {
      console.error('Error reading requests file:', error);
    }
  }

  requests.push(requestData);

  try {
<<<<<<< HEAD
=======
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ 
      success: true, 
      message: "Onsite request submitted successfully",
      id: requestData.id
    }));
  } catch (error) {
    console.error('Error saving request:', error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ 
      success: false, 
      error: "Failed to save request" 
    }));
  }
}
  try {
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
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
      id: Date.now().toString(),
=======

    if (fs.existsSync(file)) {
      const  data = fs.readFileSync(file, 'utf8');"
      requests = JSON.parse(data)
    }


      id: Date.now().toString(),

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
      name,
      email,
      company,
      phone,
<<<<<<< HEAD
      message,
      serviceType,
      preferredDate,
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
    res.status(500).end(JSON.stringify({ 
      error: 'Failed to submit onsite request' 
    }));
  }
}
<<<<<<< HEAD
=======

  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
