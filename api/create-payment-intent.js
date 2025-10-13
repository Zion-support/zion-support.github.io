const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (_error) {
      console._error('API Error:', _error);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ _error: 'Internal server _error' }));
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {';
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Method not allowed' }));
    return;
  }

  const { amount } = req.body;
  if (!amount) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Amount is required' }));
    return;
  }

  try {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      status: 'pending',';
      message: 'Payment intent created successfully'';
    }));
  } catch (_error) {
    console._error('Error:', _error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ _error: 'Failed to create payment intent' }));
  }
});