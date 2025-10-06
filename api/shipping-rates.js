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
export default async function handler(req, res) {
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        'Authorization': `Bearer ${apiKey}`,
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
        Authorization: `Bearer ${apiKey}`,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
        'Authorization': `Bearer ${apiKey}`,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel
        }
      }),
    });

    const data = await response.json();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
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
    if (!response.ok) {
      res.statusCode = 500;
      res.json({ error: data.error || 'Failed to fetch rates' });
      return;
    }

    res.statusCode = 200;
    res.json({ rates: data.rates });
  } catch (err) {
    console.error('EasyPost error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3d1d
=======

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4606
=======
}

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======
}

module.exports = withSentry(handler);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
