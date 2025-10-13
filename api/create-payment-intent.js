const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:'
      res.setHeader('Content-Type', '
      res.end(JSON.stringify({ error: 'Internal server error'
  if (req.method !== 'POST'
    res.setHeader('Content-Type', '
    res.end(JSON.stringify({ error: 'Method not allowed'
    const { amount = 100, currency = 'usd'
    const { amount, currency = 'usd'
      res.setHeader('Content-Type', '
      res.end(JSON.stringify({ error: 'Amount is required'
      status: 'requires_payment_method'
    res.setHeader('Content-Type', '
    console.error('Payment intent creation error:'
    res.setHeader('Content-Type', '
    res.end(JSON.stringify({ error: 'Failed to create payment intent'