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
      company,
      projectType,
      budget,
      timeline,
      message,
      preferredContact,
      urgency
    } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
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

    const requestData = {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      projectType: projectType || 'Not specified',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      message,
      preferredContact: preferredContact || 'email',
      urgency: urgency || 'normal',
      timestamp: new Date().toISOString(),
      status: 'pending'
    }

    // Log request for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Onsite request received:', requestData)
    }

    // In a real application, you would save this to a database
    // For now, we'll just return a success response

    res.status(200).json({
      success: true,
      message: 'Onsite request submitted successfully',
      requestId: `onsite_${Date.now()}`,
      data: requestData
    })

  } catch (error) {
    console.error('Onsite request error:', error)
    res.status(500).json({
      error: 'Failed to submit onsite request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}