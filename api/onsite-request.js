<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'onsite-requests.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

try {
    const data = fs.readFileSync(file, 'utf8');
    const requests = JSON.parse(data);
    
    const newRequest = {
      id: Date.now().toString(),
      ...req.body,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    requests.push(newRequest);
    fs.writeFileSync(file, JSON.stringify(requests, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      message: 'Onsite request submitted successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
    console.error('Error saving onsite request:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save request' }));
  }
}
=======
const fs = require("fs");
const path = require("path");

// Simple wrapper function to replace withSentry
function handler(req, res) {
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

  let existing = [];
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, "utf8");
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
    }
  } catch (error) {
    // Log error for debugging in development
    console.error("Error reading existing requests:", error);
    existing = [];
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
  };

  existing.push(newRequest);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
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

module.exports = handler;
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
