const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  const {
    name,
    email,
    phone: _phone,
    company: _company,
    location,
    details: _details
  } = req.body || {};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  if (!name || !email || !location) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields' });
    return;
  }

  const file = path.join(process.cwd(), 'data', 'onsite-requests.json');
  let existing = [];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  existing.push({
    name,
    email,
    phone: _phone,
    company: _company,
    location,
    details: _details,
    createdAt: new Date().toISOString()
  });
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true });
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
module.exports = withSentry(handler);