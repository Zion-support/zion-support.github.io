const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      location,
      details
    } = req.body || {};

    if (!name || !email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name and email are required' }));
      return;
    }

    // Process onsite request
    const requestData = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      company,
      location,
      details,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Log the request (in production, save to database)
    console.log('Onsite request received:', requestData);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Onsite request submitted successfully',
      requestId: requestData.id
    }));
  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit onsite request' }));
  }
}

module.exports = withSentry(handler);