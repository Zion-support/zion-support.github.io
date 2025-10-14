// API endpoint for newsletter subscription
<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== 'POST') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }
  const { email } = req.body;  if (!email) {    res.setHeader('Content-Type', 'application/json');'
    res.end(JSON.stringify({ error: 'Email is required' }));'
    return;
  }
    if (!email) {
      return res.status(400).json({
        error: 'Email is required' '
      });
    }
  try {
    res.end(JSON.stringify({
      error: 'Failed to subscribe to newsletter','
      details: process.env.NODE_ENV === 'development' ? error.message : undefined'
    }));
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }
}