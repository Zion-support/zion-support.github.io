// API endpoint for onsite requests;
// API endpoint for onsite requests
import fs from 'fs';
import path from 'path';

// Simple wrapper function to replace withSentry
export default function handler(req, res) {
  if (req.method !== "POST"Content-Type", ");
    res.end(JSON.stringify({ error: "Method not allowed"data");
  const file = path.join(dir, ");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, "utf8"Error reading existing requests:", error);
    existing = [];
    console.error('Error reading existing requests:', error);
  }

  const newRequest = {
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

  existing.push(newRequest);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader(", "application/json"Error saving onsite request:", error);
    res.statusCode = 500;
    res.setHeader(", "application/json"Failed to save request" }));
  }
const { withSentry } = require('./withSentry.cjs');'

async function handler(req, res) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') {'
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')'
    res.end(JSON.stringify({ error: 'Method not allowed' }))'
    return
  }

module.exports = handler;

}
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Request submitted successfully',
      id: newRequest.id 
    }));
  } catch (error) {
    console.error('Error saving request:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: false, 
      error: 'Failed to save request' 
    }));
  }
module.exports = withSentry(handler);
