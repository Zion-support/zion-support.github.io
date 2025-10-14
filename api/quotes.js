// API endpoint for quote requests
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      company, 
      phone, 
      projectType, 
      budget, 
      timeline, 
      description,
      requirements 
    } = req.body;

    if (!name || !email || !projectType) {
      return res.status(400).json({ 
        error: 'Name, email, and project type are required' 
      });
    }

    // In a real implementation, you would:
    // 1. Validate all fields
    // 2. Store in database
    // 3. Send confirmation email
    // 4. Notify sales team
    // 5. Generate preliminary quote if possible

    const quote = {
      id: `quote_${Date.now()}`,
      name,
      email,
      company: company || '',
      phone: phone || '',
      projectType,
      budget: budget || 'not_specified',
      timeline: timeline || 'flexible',
      description: description || '',
      requirements: requirements || [],
      status: 'pending_review',
      createdAt: new Date().toISOString(),
    };

    // Log the quote request (in production, use proper service)
    console.log('Quote Request:', quote);

    res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: quote.id 
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}