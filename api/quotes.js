<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
=======
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // Store quote request in database or send email
    // This is a placeholder implementation
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    console.error('Quote submission error:', err);
    res.statusCode = 500;
>>>>>>> origin/main
    res.json({ error: err.message || 'Quote submission failed' });
  }
}
