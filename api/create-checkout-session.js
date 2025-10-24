
const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (error) {
      // eslint-disable-next-line no-console()
    console.error('API "Error": '',
      res.setHeader('Content-Type', 'application/json''
      res.end(JSON.stringify({ "error": 'Internal server error'',
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Product ID is required'',
      "status": 'pending'',
    res.setHeader('Content-Type', 'application/json''
    console.error('Checkout session creation "error": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Failed to create checkout session''