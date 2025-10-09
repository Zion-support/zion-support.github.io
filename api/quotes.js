export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }));
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
      createdAt: new Date().toISOString()
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Quote submission failed' }));
  }
}
