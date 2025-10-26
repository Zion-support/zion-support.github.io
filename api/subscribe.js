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
    res.end(JSON.stringify({ error: 'Email is required' }));

  try {
    if (!isValidEmail(email)) {
      res.end(JSON.stringify({ error: 'Invalid email format' }));

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

    const subscribersFile = path.join(dataDir, 'subscribers.json');
    let subscribers = [];
    
    if (fs.existsSync(subscribersFile)) {
        const data = fs.readFileSync(subscribersFile, 'utf8');
        subscribers = JSON.parse(data);
      } catch (err) {
        console.error('Error reading subscribers file:', err);


      message: 'Successfully subscribed to newsletter',
      subscription
    }));

  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Internal server error' }));

module.exports = handler;
