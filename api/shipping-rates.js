// API endpoint for shipping rates
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'shipping-rates.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { destination, weight, serviceType } = req.body;

    if (!destination || !weight) {
      return res.status(400).json({ 
        error: 'Destination and weight are required' 
      });
    }

    // Calculate shipping rate based on destination and weight
    const distanceMultiplier = destination === 'US' ? 1 : 2;
    const baseRate = 10;
    const rate = baseRate + (weight * 0.5 * distanceMultiplier);

    const newRate = {
      id: Date.now().toString(),
      destination,
      weight,
      serviceType: serviceType || 'Standard',
      rate: Math.round(rate * 100) / 100, // Round to 2 decimal places
      createdAt: new Date().toISOString()
    };

    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing rates
    let rates = [];
    if (fs.existsSync(file)) {
      try {
        const data = fs.readFileSync(file, 'utf8');
        rates = JSON.parse(data);
      } catch (error) {
        console.error('Error reading existing rates:', error);
      }
    }

    // Add new rate
    rates.push(newRate);

    // Save to file
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));

    res.status(200).json({ 
      success: true,
      rate: newRate,
      message: 'Shipping rate calculated successfully'
    });
  } catch (error) {
    console.error('Shipping rate calculation error:', error);
    res.status(500).json({ 
      error: 'Failed to calculate shipping rate',
      message: error.message 
    });
  }
}