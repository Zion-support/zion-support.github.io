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

  const { destination, weight, dimensions } = req.body;

  try {
    // Shipping rates calculation logic here
    console.log('Shipping rates request:', { destination, weight, dimensions });
    
    const rates = [
      { service: 'standard', cost: 10.99, days: 5 },
      { service: 'express', cost: 19.99, days: 2 },
      { service: 'overnight', cost: 29.99, days: 1 }
    ];

    res.status(200).json({ rates });
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
});
=======
// Shipping rates calculation()
export default async function handler(req, res) {
  if (req.method !== 'POST''
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Method not allowed'',
    return res.status(400).json({ "error": 'Destination and weight are required'',}
    const destinationMultiplier = destination === 'international''
        "service": 'Standard'',
        "days": destination === 'international' ? '7-14' : '3-5'',
        "service": 'Express'',
    "days": destination === 'international' ? '3-7' : '1-2'',
    res.setHeader('Content-Type', 'application/json''
    console.error('"Error": '',
    res.setHeader('Content-Type', 'application/json''
    res.end(JSON.stringify({ "error": 'Failed to calculate shipping rates''
>>>>>>> origin/main
