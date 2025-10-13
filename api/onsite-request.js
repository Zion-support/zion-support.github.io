// API endpoint for onsite requests
const path = require('path');
const fs = require('fs');

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
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