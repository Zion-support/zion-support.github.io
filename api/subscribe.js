<<<<<<< HEAD
import fs from 'fs'';
import path from 'path'';
import fs from "fs"";
import path from "path"";
const dir = path.join(process.cwd(), 'data'';
const file = path.join(dir, 'subscribers.json''
if (req.method !== 'POST''
res.setHeader('Content-Type', 'application/json''
res.end(JSON.stringify({ "error": 'Method not allowed'',;'"
res.setHeader('Content-Type', 'application/json'';";'"
res.end(JSON.stringify({ "error": 'Email is required''}'";
const data = fs.readFileSync(file, 'utf8'';";'"
console.error('"Error": '',;";'"
console.error('Error reading existing "subscribers": '',;'"
res.setHeader('Content-Type', 'application/json'';";'"
res.end(JSON.stringify({ "error": 'Email already subscribed'',";'"
    "name": name || ''',";'"
    "status": 'active'',;'"
res.setHeader('Content-Type', 'application/json''";'"
    "message": 'Successfully subscribed to newsletter'',;";'"
console.error('"Error": '',;'"
res.setHeader('Content-Type', 'application/json'';");'"
    res.end(JSON.stringify({ "error": 'Failed to save subscription'')";'";
const dir = path.join(process.cwd(), "data"";
const file = path.join(dir, "subscribers.json""
if (req.method !== "POST"" res.setHeader("Content-Type", "application/json""
res.end(JSON.stringify({ "error": "Method not allowed"" res.setHeader("Content-Type", "application/json""
res.end(JSON.stringify({ "error": "Email is required""};
   ;
const data = fs.readFileSync(file, "utf8"" console.error(""Error": "" console.error("Error reading existing "subscribers": "" res.setHeader("Content-Type", "application/json""
res.end(JSON.stringify({ "error": "Email already subscribed""
    "name": name || """
    "status": "active"" res.setHeader("Content-Type", "application/json""
    "message": "Successfully subscribed to newsletter"" console.error(""Error": "" res.setHeader("Content-Type", "application/json""
    res.end(JSON.stringify({ "error": "Failed to save subscription"')
}}}}}})))))))))))))))))))))))))))))))))))))
=======
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }

  try {
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
      return;
    }

    // Create subscription record
    const subscription = {
      email,
      name: name || '',
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active',
      id: `sub_${Date.now()}`
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('New subscription:', subscription);

    // Optional: Save to file for backup (not recommended for production)
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const subscribersFile = path.join(dataDir, 'subscribers.json');
    let subscribers = [];
    
    if (fs.existsSync(subscribersFile)) {
      try {
        const data = fs.readFileSync(subscribersFile, 'utf8');
        subscribers = JSON.parse(data);
      } catch (err) {
        console.error('Error reading subscribers file:', err);
      }
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      res.statusCode = 409;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ 
        error: 'Email already subscribed',
        message: 'This email is already subscribed to our newsletter'
      }));
      return;
    }

    subscribers.push(subscription);
    
    try {
      fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));
    } catch (err) {
      console.error('Error writing subscribers file:', err);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Successfully subscribed to newsletter',
      subscription
    }));

  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}

module.exports = handler;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
