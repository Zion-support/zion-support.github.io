// Quotes API endpoint
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { service, budget, timeline, requirements } = req.body || {};

    if (!service) {
      return res.status(400).json({ error: 'Service type is required' });
    }

    // Process quote request logic here
    // In a real application, you would:
    // 1. Calculate pricing based on service and requirements
    // 2. Store in database
    // 3. Send notification to sales team
    // 4. Send quote to client

    console.log('Quote request received:', { service, budget, timeline, requirements });
    
    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully. We will send you a detailed quote within 24 hours.' 
    });
  } catch (err) {
    console.error('Failed to process quote request:', err);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
}