const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, company, message, phone, serviceType, budget, timeline } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  const dir = path.dirname(file);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let existing = [];

  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading existing requests:', error);
  }

  const newRequest = {
    id: Date.now().toString(),
    name,
    email,
    company,
    message,
    phone,
    serviceType,
    budget,
    timeline,
    submittedAt: new Date().toISOString()
  };

  existing.push(newRequest);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.status(200).json({ success: true, message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Error saving request:', error);
    res.status(500).json({ error: 'Failed to save request' });
  }
}

module.exports = withSentry(handler);