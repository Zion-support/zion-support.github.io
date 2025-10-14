// API endpoint for quote requests
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      serviceType, 
      projectDescription, 
      budget,
      timeline,
      additionalRequirements 
    } = req.body;

    if (!companyName || !contactName || !email || !serviceType) {
      return res.status(400).json({ 
        error: 'Company name, contact name, email, and service type are required' 
      });
    }

    // In a real implementation, you would:
    // 1. Validate all required fields
    // 2. Store in database
    // 3. Send confirmation email
    // 4. Notify sales team
    // 5. Generate preliminary quote

    const quoteRequest = {
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      projectDescription,
      budget,
      timeline,
      additionalRequirements,
      requestedAt: new Date().toISOString(),
      status: 'pending',
      quoteId: `quote_${Date.now()}`
    };

    // Mock response for development
    console.log('Quote request:', quoteRequest);

    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: quoteRequest.quoteId,
      estimatedResponseTime: '24-48 hours'
    });

  } catch (error) {
    console.error('Error in quote request:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to submit quote request'
    });
  }
}