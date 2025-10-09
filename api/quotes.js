export default async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.status(405).json({ error: 'Method not allowed' });
    return;
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
<<<<<<< HEAD
      res.status(400).json({ error: 'Name, email, phone, and details are required' });
      return;
=======
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
    }

    // Process quote submission logic here
    const quote = {
<<<<<<< HEAD
      id: 'quote_' + Math.random().toString(36).substr(2, 9),
=======
      id: Date.now().toString(),
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
      name,
      email,
      phone,
      details,
      country,
      service,
<<<<<<< HEAD
      timestamp: new Date().toISOString()
=======
      createdAt: new Date().toISOString()
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
    };

    // In a real application, you would save this to a database
    res.statusCode = 200;
    res.json({ success: true, quote });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
  }
}