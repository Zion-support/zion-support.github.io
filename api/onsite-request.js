const { withSentry } = require('./withSentry.cjs');
const { isValidEmail } = require('./emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const {
    name,
    email,
    company,
    phone,
    message,
    requestType = 'consultation',
  } = req.body || {};

  if (!name || !email) {
    res.statusCode = 400;
    res.json({ error: 'Name and email are required' });
    return;
  }

  if (!isValidEmail(email)) {
    res.statusCode = 400;
    res.json({ error: 'Invalid email address' });
    return;
  }

  try {
    // Mock onsite request - in production, this would integrate with a CRM
    const request = {
      id: `req_${Date.now()}`,
      name,
      email,
      company: company || '',
      phone: phone || '',
      message: message || '',
      requestType,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Log to file (mock implementation)
    const requestsDir = path.join(process.cwd(), '.data');
    const requestsFile = path.join(requestsDir, 'onsite-requests.json');

    // Ensure directory exists
    if (!fs.existsSync(requestsDir)) {
      fs.mkdirSync(requestsDir, { recursive: true });
    }

    // Read existing requests
    let requests = [];
    if (fs.existsSync(requestsFile)) {
      const data = fs.readFileSync(requestsFile, 'utf8');
      requests = JSON.parse(data);
    }

    // Add new request
    requests.push(request);
    fs.writeFileSync(requestsFile, JSON.stringify(requests, null, 2));

    res.statusCode = 200;
    res.json({
      success: true,
      message: 'Request received successfully',
      request: { id: request.id, status: request.status },
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to process request' });
  }
}

module.exports = withSentry(handler);