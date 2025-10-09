export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
    }

    // Process quote submission logic here
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country,
      service,
      createdAt: new Date().toISOString()
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Quote submission failed' });
  }
}
