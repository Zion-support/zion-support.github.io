// Simple wrapper function to replace withSentry (currently unused)
// const withSentry = (handler) => handler

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    const { name, email, phone, company, message, preferredDate, serviceType } = req.body || {}
    
    if (!name || !email || !phone) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, and phone are required' }))
      return
    }

    // Process the request (in a real app, you would save to database)
    console.log('Onsite request received:', {
      name,
      email,
      phone,
      company: company || 'Not specified',
      message: message || 'No message provided',
      preferredDate: preferredDate || 'Not specified',
      serviceType: serviceType || 'General consultation'
    })

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Onsite request submitted successfully',
      requestId: Date.now().toString()
    }))

  } catch (error) {
    console.error('Error processing onsite request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}
