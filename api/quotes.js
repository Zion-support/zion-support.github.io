export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, service, budget, timeline, message } = req.body;

    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Name, email, and service are required' });
    }

    // Here you would typically save to a database or send to your team
    console.log('Quote request received:', {
      name,
      email,
      company,
      service,
      budget,
      timeline,
      message
    });

    res.status(200).json({ 
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
}
