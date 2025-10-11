export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }

  try {
    const { priceId, quantity = 1 } = req.body || {}
    
    if (!priceId) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        error: 'Price ID is required'
      }))
      return
    }

    // Mock checkout session creation
    const session = {
      id: `cs_${Date.now()}`,
      url: `https://checkout.stripe.com/pay/cs_${Date.now()}`,
      priceId,
      quantity,
      amount: 1000 * quantity, // Mock amount
      currency: 'usd',
      status: 'open'
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      success: true,
      session
    }))
  } catch (error) {
    console.error('Error creating checkout session:', error)
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      error: 'Internal server error'
    }))
  }
}