export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { service, budget, timeline, details } = req.body;
    
    if (!service) {
      return res.status(400).json({ error: 'Service is required' });
    }
    
    // Mock quote generation
    const quote = {
      id: 'quote_' + Math.random().toString(36).substr(2, 9),
      service,
      estimatedCost: Math.floor(Math.random() * 50000) + 5000,
      timeline: timeline || '2-4 weeks',
      status: 'pending'
    };
    
    console.log('Quote request:', { service, budget, timeline, details });
    
    res.status(200).json(quote);
  } catch (error) {
    console.error('Quote generation error:', error);
    res.status(500).json({ error: 'Failed to generate quote' });
  }
}