
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // Process quote submission logic here
    res.json({ success: true, message: 'Quote submitted successfully' });
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}
