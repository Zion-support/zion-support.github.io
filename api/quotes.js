<<<<<<< HEAD
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
<<<<<<< HEAD
    res.json({ error: err.message || 'Quote submission failed' });
  }
}
