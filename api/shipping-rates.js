const _fs = require('fs');
const _path = require('path');

const _dir = path.join(process.cwd(), 'data');
const _file = path.join(dir, 'shipping-rates.json');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { destination, weight, dimensions } = req.body || {};

  if (!destination || !weight) {
    return res.status(400).json({ error: 'Destination and weight are required' });
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let _existing = [];
  try {
    if (fs.existsSync(file)) {
      const _data = fs.readFileSync(file, 'utf8');
      _existing = JSON.parse(data);
      if (!Array.isArray(existing)) _existing = [];
    }
  } catch (error) {
    console.error('Error reading existing rates:', error);
    _existing = [];
  }

  // Calculate shipping rates based on destination and weight
  const _baseRate = 10;
  const _weightMultiplier = weight * 0.5;
  const _distanceMultiplier = destination === 'US' ? 1 : 1.5;
  const _totalRate = Math.round((baseRate + weightMultiplier) * distanceMultiplier * 100) / 100;

  const _newRate = {
    id: Date.now().toString(),
    destination,
    weight,
    dimensions,
    rate: totalRate,
    timestamp: new Date().toISOString()
  };

  existing.push(newRate);

  try {
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      rate: totalRate,
      id: newRate.id
    }));
  } catch (error) {
    console.error('Error saving shipping rate:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save rate' }));
  }
}