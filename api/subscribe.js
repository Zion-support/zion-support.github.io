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
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));

    const subscriber = {
      id: Date.now().toString(),
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('New subscriber:', subscriber);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to newsletter',
      subscriber: {
        id: subscriber.id,
        email: subscriber.email,
        subscribedAt: subscriber.subscribedAt
      }
    }));

  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
  }
}

module.exports = withSentry(handler);
