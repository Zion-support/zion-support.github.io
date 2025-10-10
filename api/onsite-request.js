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

  const { name, email, company, phone, message, location } = req.body || {};

  if (!name || !email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name and email are required' }));
    return;
  }

  try {
    const request = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      phone: phone || '',
      message: message || '',
      location: location || '',
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('Onsite request submitted:', request);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: request.id
    }));
  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit onsite request' }));
  }
}

module.exports = withSentry(handler);
