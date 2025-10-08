// Simple Sentry wrapper for API handlers
function withSentry(handler) {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.json({ error: 'Internal Server Error' });
      }
    }
  };
}

module.exports = { withSentry };