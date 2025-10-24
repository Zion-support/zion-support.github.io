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

<<<<<<< HEAD
export default withErrorLogging(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { service, budget, timeline, requirements } = req.body;

  try {
    // Quote generation logic here
    console.log('Quote request:', { service, budget, timeline, requirements });
    
    const quote = {
      id: 'quote_' + Date.now(),
      service,
      estimatedCost: budget,
      timeline,
      status: 'pending'
    };

    res.status(200).json({ quote });
  } catch (error) {
    console.error('Quote generation error:', error);
    res.status(500).json({ error: 'Failed to generate quote' });
  }
});
=======
export default async function handler(req, res) {
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Name, email, phone, and details are required''
      "country": country || 'Not specified'',
    "service": service || 'General inquiry'',
      "status": 'pending'',
    console.log('Quote request "processed": '',
    res.setHeader('Content-Type', 'application/json''
    "message": 'Quote request submitted successfully'',
    console.error('Quote submission "error": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Internal server error''
>>>>>>> origin/main
