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
    res.setHeader('Content-Type', '
    res.end(JSON.stringify({ error: 'Product ID is required'
  console.error('Error:'
      status: 'pending'
    res.setHeader('Content-Type', '
    console.error('Checkout session creation error:'
    res.setHeader('Content-Type', '
      error: 'Failed to create checkout session'