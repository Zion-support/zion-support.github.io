const { withSentry } = require('./withSentry.cjs');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  const {
    name,
    email,
    phone: _phone,
    company: _company,
    location,
    details: _details
  } = req.body || {};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
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
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(existing)) existing = [];
  } catch {
    // File doesn't exist or is invalid, use empty array
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  res.statusCode = 200;
  res.json({ success: true });
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
module.exports = withSentry(handler);