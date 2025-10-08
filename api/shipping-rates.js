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
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
export default async function handler(req, res) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
>>>>>>> origin/main
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e3b
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-895b
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b781
  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
=======
=======
>>>>>>> origin/main

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.statusCode = 500;
      res.json({ error: 'EasyPost API key not configured' });
      return;
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
>>>>>>> origin/main
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel,
        },
      }),
    });

    const data = await response.json();

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
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
}

module.exports = withSentry(handler);
>>>>>>> origin/main
