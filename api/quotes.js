// API endpoint for quote requests
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      projectType, 
      budget, 
      timeline, 
      description,
      contactInfo 
    } = req.body;

    if (!projectType || !description || !contactInfo) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    // Here you would process the quote request
    console.log('Quote request received:', {
      projectType,
      budget,
      timeline,
      description,
      contactInfo
    });

    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully'
    });

  } catch (error) {
    console.error('Error processing quote request:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}