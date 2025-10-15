<<<<<<< HEAD
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, details, country, service } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Process the quote request
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id);
    
    res.status(200).json({ 
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======


>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
