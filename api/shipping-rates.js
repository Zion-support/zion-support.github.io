// API endpoint for shipping rates
import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'shipping-rates.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { destination, weight } = req.body;
    
    // Ensure data directory exists
    const dataDir = path.dirname(file);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Load existing rates
    let rates = [];
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      rates = JSON.parse(data);
    }
    
    const distanceMultiplier = destination === 'US' ? 1 : 2;
    const baseRate = 10;
    const rate = baseRate + (weight * 0.5 * distanceMultiplier);
    
    const newRate = {
      id: Date.now().toString(),
      destination,
      weight,
      rate,
      timestamp: new Date().toISOString()
    };
    
    rates.push(newRate);
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      rate: rate,
      message: 'Shipping rate calculated successfully'
    }));
  } catch (error) {
    console.error('Error: ', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save rate' }));
  }
}
