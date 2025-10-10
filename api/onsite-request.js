const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone: _phone,
    company: _company,
    location,
    details: _details
  } = req.body || {};
  const { name, email, company, phone, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  const { name, email, company, phone, message, location } = req.body || {};

<<<<<<< HEAD
  if (!name || !email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name and email are required' }));
    return;
=======
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
>>>>>>> origin/resolve-merge-conflicts
  }

  try {
<<<<<<< HEAD
    const request = {
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

<<<<<<< HEAD
    // In a real application, you would save this to a database
    // For now, we'll just log it
    console.log('Onsite request submitted:', request);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Onsite request submitted successfully',
      requestId: request.id
    }));
  } catch (error) {
    console.error('Onsite request error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to submit onsite request' }));
  }
=======
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array;
    if (fs.existsSync(file)) {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (error) {
    console.error('Error reading existing requests:', error);
    const data = fs.readFileSync(file, 'utf8');
    existing = JSON.parse(data);
  } catch {
    // File doesn't exist or is invalid, start with empty array
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    timestamp: new Date().toISOString()
    createdAt: new Date().toISOString()
=======
  try {
>>>>>>> origin/resolve-merge-conflicts
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
<<<<<<< HEAD
  res.json({ success: true, message: 'Request submitted successfully' });
  res.json({ success: true, request: newRequest });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
=======
>>>>>>> origin/resolve-merge-conflicts
}

module.exports = withSentry(handler);