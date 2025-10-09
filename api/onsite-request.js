const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
=======
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-1917
  }

  const { name, email, company, message, phone, serviceType, budget, timeline } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;

<<<<<<< HEAD
  const {
    name,
    email,
    company,
    phone,
    message,
    serviceType,
    budget,
    timeline
  } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1917
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
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company: company || '',
    message: message || '',
    timestamp: new Date().toISOString()
=======
    const data = fs.readFileSync(file, 'utf8');
    existing = JSON.parse(data);

  } catch {
    // File doesn't exist or is invalid, start with empty array
    existing = [];
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company,
    phone,
    message,
    serviceType,
    budget,
    timeline,
    createdAt: new Date().toISOString()
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-1917
  };

  existing.push(newRequest);

  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
<<<<<<< HEAD
<<<<<<< HEAD
  res.json({ success: true, message: 'Request submitted successfully' });
=======
<<<<<<< HEAD
  res.json({ success: true });
=======
  res.json({ success: true, message: 'Request submitted successfully' });
  res.json({/* TODO: Fix JSX expression */})
  s: true });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
>>>>>>> cursor/website-audit-and-update-with-deployment-a7b4
=======

  res.json({ success: true, message: 'Request submitted successfully' });

>>>>>>> cursor/fix-errors-and-merge-to-main-1917
}

module.exports = withSentry(handler);