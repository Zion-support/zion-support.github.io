const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

<<<<<<< HEAD
  const { name, email, company, message } = req.body || {};
=======
  const { name, email, company, phone, message } = req.body || {};
>>>>>>> main

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];

  try {
<<<<<<< HEAD
    if (fs.existsSync(file)) {
      existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    }
  } catch (err) {
    console.error('Error reading existing requests:', err);
=======
    const data = fs.readFileSync(file, 'utf8');
    existing = JSON.parse(data);
  } catch (err) {
    // File doesn't exist or is invalid, start with empty array
>>>>>>> main
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
<<<<<<< HEAD
    company: company || '',
    message: message || '',
    timestamp: new Date().toISOString()
=======
    company,
    phone,
    message,
    createdAt: new Date().toISOString()
>>>>>>> main
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
<<<<<<< HEAD
  res.json({ success: true, message: 'Request submitted successfully' });
=======
  res.json({ success: true, request: newRequest });
>>>>>>> main
}

module.exports = withSentry(handler);