export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};

    if (!name || !email || !phone || !details) {
      return res.status(400).json({ error: 'Name, email, phone, and details are required' });
    }

    // Process quote request
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country: country || 'US',
      service: service || 'General Inquiry',
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    // Here you would typically save to database or send email
    // For now, just return success
    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (err) {
    console.error('Error processing quote request:', err);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
}