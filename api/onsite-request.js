const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
  }

<<<<<<< HEAD
  const {
    name,
    email,
    phone: _phone;
    company: _company;
    location,
    details: _details;
  } = req.body || {};
=======
  const { name, email, company, phone, message } = req.body || {};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
=======
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { name, email, company, phone, message } = req.body || {};

  if (!name || !email) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Name and email are required' }));
    return;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];

  try {
<<<<<<< HEAD
<<<<<<< HEAD
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array;
=======
    if (fs.existsSync(file)) {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (error) {
    console.error('Error reading existing requests:', error);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
=======
    const data = fs.readFileSync(file, 'utf8');
    existing = JSON.parse(data);
  } catch {
    // File doesn't exist or is invalid, start with empty array
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
<<<<<<< HEAD
    timestamp: new Date().toISOString()
=======
    createdAt: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
<<<<<<< HEAD
  res.json({ success: true, message: 'Request submitted successfully' });
=======
  res.json({ success: true, request: newRequest });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
}

module.exports = withSentry(handler);