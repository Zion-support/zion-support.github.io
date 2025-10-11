export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return }

  try {
    const { name, email, phone, details, country, service } = req.body || {}
    
    if (!name || !email || !phone || !details) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
res.end(JSON.stringify({ 
        error: 'Name, email, phone, and details are required' 
      }))

      return
    }

    // Process quote submission logic here
const quoteData = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    // Here you would typically save to a database
    // For now, we'll just return a success response
    console.log('Quote request received:', quoteData)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      quoteId: quoteData.id
    }))

  } catch (error) {
    console.error('Error processing quote request:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      error: 'Internal server error',
      message: 'Failed to process quote request'
    }))
    }

    // Process quote submission logic here
    // In a real application, you would:
    // 1. Save to your database
    // 2. Send notification to your sales team
    // 3. Send confirmation email to the customer
    // 4. Integrate with your CRM

    // For now, just return a success response
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      success: true, 
      message: 'Quote request received successfully',
      quoteId: `QUOTE-${Date.now()}`
    }))
  } catch (error) {
    console.error('Error processing quote request: ', error)
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Internal server error' 
    }))
const quoteData = {

      name,
      email,
      phone,
      details,
      country: country || 'Not specified',
      service: service || 'General inquiry',
timestamp: new Date().toISOString(),
      status: 'pending'
    }

    // Log quote request for debugging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Quote request received:', quoteData)

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
console.error('Quote submission error:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ 
      error: 'Failed to submit quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }))

}
}