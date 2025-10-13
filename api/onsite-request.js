<<<<<<< HEAD
<<<<<<< HEAD
// API endpoint for onsite requests;
// API endpoint for onsite requests
import fs from 'fs';
import path from 'path';

// Simple wrapper function to replace withSentry
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
export default function handler(req, res) {
  if (req.method !== "POST") {
=======
function withSentry(handler) {
  return handler;
}

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

function handler(req, res) {
  if (req.method !== 'POST') {
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
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

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, "utf8");
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (error) {
    // Log error for debugging in development
<<<<<<< HEAD
    console.error("Error reading existing requests:", error);
    existing = [];
=======
    console.error('Error reading existing requests:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
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
<<<<<<< HEAD
=======
    status: 'pending'
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
  };

  existing.push(newRequest);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
<<<<<<< HEAD
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: true,
        id: newRequest.id,
      }),
    );
  } catch (error) {
    // Log error for debugging in development
    console.error("Error saving onsite request:", error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Failed to save request" }));
  }
}
=======
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

>>>>>>> origin/main

}
>>>>>>> cursor/delete-records-a75e
=======
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
}

module.exports = withSentry(handler);
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
