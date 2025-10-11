export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const {
      name,
      email,
      phone,
      details,
      country,
      service,
      budget,
      timeline,
      company
    } = req.body

    // Validate required fields
    if (!name || !email || !details) {
      res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'details']
      })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      res.status(400).json({
        error: 'Invalid email format'
      })
      return
    }

    const quoteData = {
      name,
      email,
      phone: phone || 'Not provided',
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      company: company || 'Not provided',
      timestamp: new Date().toISOString(),
      status: 'pending'
    }

    // Log quote request for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Quote request received:', quoteData)
    }

    // In a real application, you would save this to a database
    // For now, we'll just return a success response

    res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully',
      quoteId: `quote_${Date.now()}`,
      data: quoteData
    })

  } catch (error) {
    console.error('Quote submission error:', error)
    res.status(500).json({
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}