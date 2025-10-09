export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      res.status(400).json({ error: 'Name, email, phone, and details are required' });
      return;
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
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quoteId: quote.id });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Quote submission failed' });
  }
}
