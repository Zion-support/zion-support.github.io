const withErrorLogging = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};

export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message, service } = req.body;

  try {
    // Onsite request logic here
    console.log('Onsite request:', { name, email, company, message, service });
    
    res.status(200).json({ 
      success: true, 
      message: 'Request submitted successfully' 
    });
  } catch (error) {
    console.error('Onsite request error:', error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
});