export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {}
    
    if (!name || !email || !phone || !details) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Name, email, phone, and details are required' }))
      return
    }

    // Process quote submission logic here
    const quote = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry'
    }

    // Here you would typically save to a database
    // For now, we'll just log it
    console.log('New quote request:', quote)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: quote.id
    }))

  } catch (error) {
    console.error('Error processing quote request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Internal server error' }))
  }
}