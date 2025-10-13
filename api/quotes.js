export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { service, budget, timeline, description } = req.body;
  
  if (!service || !description) {
    return res.status(400).json({ 
      error: 'Service and description are required' 
    });
  }

  try {
    // Generate a quote ID
    const quoteId = 'QT_' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Here you would typically calculate pricing based on service and requirements
    const estimatedPrice = calculateEstimatedPrice(service, budget, timeline);
    
    const quote = {
      id: quoteId,
      service: service,
      estimatedPrice: estimatedPrice,
      timeline: timeline || 'TBD',
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    console.log('Quote generated:', quote);
    
    res.status(200).json({ 
      success: true, 
      quote: quote 
    });
  } catch (error) {
    console.error('Quote generation error:', error);
    res.status(500).json({ error: 'Failed to generate quote' });
  }
}

function calculateEstimatedPrice(service, budget, timeline) {
  // Simple pricing calculation - in real app this would be more complex
  const basePrices = {
    'ai-development': 50000,
    'web-development': 15000,
    'mobile-development': 25000,
    'cloud-migration': 30000,
    'cybersecurity': 20000
  };
  
  const basePrice = basePrices[service.toLowerCase()] || 10000;
  
  // Adjust based on budget and timeline
  let multiplier = 1;
  if (timeline === 'urgent') multiplier = 1.5;
  if (budget === 'high') multiplier *= 1.2;
  if (budget === 'low') multiplier *= 0.8;
  
  return Math.round(basePrice * multiplier);
}