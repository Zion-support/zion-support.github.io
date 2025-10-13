import fs from 'fs';
import path from 'path';

// Shipping rates calculation
const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'shipping-rates.json');

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
    // Ensure data directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

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
=======
  let rates = [];
  try {
    const data = fs.readFileSync(file, 'utf8');
    rates = JSON.parse(data);
  } catch (error) {
    console.error('Error:', error);
    console.error('Error reading existing rates:', error);
  }

  const distanceMultiplier = destination === 'US' ? 1 : 2;
  const baseRate = 10;
  const rate = baseRate + (weight * 0.5 * distanceMultiplier);

  try {
    const newRate = {
      id: Date.now().toString(),
      destination,
      weight,
      rate,
      createdAt: new Date().toISOString()
    };

    rates.push(newRate);
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      rate: rate,
      message: 'Shipping rate calculated successfully' 
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
  }
}