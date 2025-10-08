// Sentry wrapper for API routes
function withSentry(handler) {
  return async function wrappedHandler(req, res) {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      
      // In production, you would send this to Sentry
      if (process.env.NODE_ENV === 'production' && process.env.SENTRY_DSN) {
        // Sentry.captureException(error);
      }
      
      if (!res.headersSent) {
        res.statusCode = 500;
        res.json({ error: 'Internal server error' });
      }
    }
  };
}

module.exports = { withSentry };