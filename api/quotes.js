export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, requirements } = req.body;
    
    // Mock quote generation logic
    const quote = {
      id: Date.now().toString(),
      service,
      requirements,
      estimatedCost: Math.floor(Math.random() * 10000) + 1000,
      estimatedTime: Math.floor(Math.random() * 30) + 1,
      timestamp: new Date().toISOString()
    };

    res.status(200).json({ 
      success: true, 
      quote 
    });
  } catch (error) {
    console.error('Quote generation error:', error);
    res.status(500).json({ error: 'Failed to generate quote' });
  }
}
