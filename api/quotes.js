export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { service, budget, timeline, requirements } = req.body;
    
    if (!service || !budget || !timeline) {
      return res.status(400).json({ error: 'Service, budget, and timeline are required' });
    }
    
    // Here you would typically process the quote request
    console.log('Quote request:', { service, budget, timeline, requirements });
    
    res.status(200).json({ 
      success: true, 
      message: 'Quote request received successfully',
      quoteId: Date.now().toString()
    });
  } catch (error) {
    console.error('Error processing quote:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
}
