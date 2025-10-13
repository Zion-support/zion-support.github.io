export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, phone, details, service } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !details) {
      res.status(400).json({ 
        error: 'Name, email, phone, and details are required' 
      });
      return;
    }

    // Here you would typically save to database or send email
    // For now, we'll just return success
    console.log('Quote request received:', { name, email, phone, service });

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully' 
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}