export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { name, email, company, message, service, country } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }
    
    // Create quote object
    const quote = {
      id: Date.now().toString(),
      name,
      email,
      company: company || 'Not specified',
      message,
      service: service || 'General inquiry',
      country: country || 'Not specified',
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    // Here you would typically save the quote to a database
    console.log('Quote request processed:', quote.id);
    
    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully!',
      quoteId: quote.id
    });
  } catch (error) {
    console.error('Quote request error: ', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
};