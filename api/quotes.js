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
      submittedAt: new Date().toISOString()
    };

    // Here you would typically save to database or send email
    console.log('Quote submission:', quote);

    res.status(200).json({ success: true, message: 'Quote submitted successfully', quoteId: quote.id });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: error.message || 'Quote submission failed' });
  }
}