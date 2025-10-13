// Shipping rates calculation

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { destination, weight } = req.body;
  
  if (!destination || !weight) {
    return res.status(400).json({ error: 'Destination and weight are required' });
  }

  try {
    // Calculate shipping rates (mock calculation)
    const baseRate = 10;
    const weightMultiplier = parseFloat(weight) * 0.5;
    const destinationMultiplier = destination === 'international' ? 2 : 1;
    
    const rates = [
      {
        service: 'Standard',
        cost: Math.round((baseRate + weightMultiplier) * destinationMultiplier),
        days: destination === 'international' ? '7-14' : '3-5'
      },
      {
        service: 'Express',
        cost: Math.round((baseRate + weightMultiplier) * destinationMultiplier * 1.5),
        days: destination === 'international' ? '3-7' : '1-2'
      }
    ];

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      rates,
      destination,
      weight
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to calculate shipping rates' }));
  }
}