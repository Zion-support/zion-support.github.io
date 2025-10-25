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

<<<<<<< HEAD
  const { email, name, interests } = req.body;
  if (!email) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Email is required' }));
=======
  const { email, name, source = 'website' } = req.body || {};

  if (!email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Email is required' }));
    return;
  }
>>>>>>> main

  try {
    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid email format' }));
<<<<<<< HEAD

    const subscriber = {
      id: Date.now().toString(),
=======
      return;
    }

    const subscription = {
>>>>>>> main
      email,
      name,
      source,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
<<<<<<< HEAD
    console.log('New subscriber:', subscriber);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    }));

=======
    console.log('Subscription created:', subscription);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Successfully subscribed to newsletter',
      subscription
    }));
>>>>>>> main
  } catch (error) {
    console.error('Subscription error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to process subscription' }));
  }
}

module.exports = withSentry(handler);
=======
    res.end(JSON.stringify({ error: 'Failed to subscribe to newsletter' }));
  }
}

module.exports = handler;
>>>>>>> main
