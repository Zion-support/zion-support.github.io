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
      id: `quote_${Date.now()}`,
      name,
      email,
      phone: phone || 'Not provided',
      details: details || 'No details provided',
      country: country || 'Not specified',
      service: service || 'General inquiry',
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    // Here you would typically save to a database
    console.log('Quote request received:', quote);
    
    res.status(200).json({ 
      message: 'Quote request submitted successfully',
      quoteId: quote.id 
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
