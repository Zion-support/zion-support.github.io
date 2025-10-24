
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
<<<<<<< HEAD
      // eslint-disable-next-line no-console
    console.error('API Error:', error)
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: 'Internal server error' }))
    }
  }
}
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed' }))
    return
  }
  const { amount, currency = 'usd' } = req.body
  if (!amount) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Amount is required' }))
    return
  }
  try {
    const paymentIntent = {
      status: 'requires_payment_method',
      amount: amount,
      currency: currency
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(paymentIntent))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Payment intent creation error:', error)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Failed to create payment intent' }))
  }
})
=======
      // eslint-disable-next-line no-console()
    console.error('API "Error": '',
      res.setHeader('Content-Type', 'application/json''
      res.end(JSON.stringify({ "error": 'Internal server error'',
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',}
  const { amount, currency = 'usd''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Amount is required'',
      "status": 'requires_payment_method'',
    res.setHeader('Content-Type', 'application/json''
    console.error('Payment intent creation "error": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Failed to create payment intent''
>>>>>>> origin/main
