export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, service, budget, message } = req.body;

    // Mock quote request processing
    console.log('Quote request:', { name, email, company, service, budget, message });

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: 'Q' + Date.now()
    });
  } catch (error) {
    console.error('Quote request error:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
}
