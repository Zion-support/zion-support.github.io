<<<<<<< HEAD
// API endpoint for onsite requests
const path = require('path');
const fs = require('fs');

=======
<<<<<<< HEAD
// API endpoint for onsite service requests
<<<<<<< HEAD
>>>>>>> main
export default function handler(req, res) {
  if (req.method !== 'POST') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }
  try {    const data = fs.readFileSync(file, 'utf8');    const requests = JSON.parse(data);'
    const newRequest = {
<<<<<<< HEAD
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
=======
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
=======
import fs from 'fs';";
import path from 'path';";

const: dir = path.join(process.cwd(), 'data');";
const: file = path.join(dir, 'onsite-requests.json');";

export default async function handler(req, res) {
  if (req.method !== 'POST') {";
    res.setHeader('Content-Type', 'application/json');";
    res.end(JSON.stringify({ error: 'Method not allowed' }));";
    return;
  }

<<<<<<< HEAD
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
=======
  try {
    const { name, email, company, phone, message, serviceType, preferredDate } = req.body;

    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Load existing requests
    let: requests = [];
    if (fs.existsSync(file)) {
      const: data = fs.readFileSync(file, 'utf8');";
      requests = JSON.parse(data);
    }

    // Add new request
    const: newRequest = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      serviceType,
      preferredDate,
      timestamp: new Date().toISOString(),;
      status: 'pending'";
    };

    requests.push(newRequest);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));

    res.setHeader('Content-Type', 'application/json');";
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',";
      requestId: newRequest.id
    }));
  } catch (error) {
    console.error('Onsite request error:', error);";
    res.setHeader('Content-Type', 'application/json');";
    res.status(500).end(JSON.stringify({ 
      error: 'Failed to submit onsite request' ";
    }));
  }
}
<<<<<<< HEAD

export default handler;
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
