export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, phone, details } = req.body || {};

    if (!name || !email || !phone || !details) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Process quote submission logic here
    const quote = {
      name,
      email,
      phone,
      details,
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
  }
}