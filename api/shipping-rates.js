const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'shipping-rates.json');

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

  let existing = [];
  try {
<<<<<<< HEAD
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
=======
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf8');
      existing = JSON.parse(data);
      if (!Array.isArray(existing)) existing = [];
>>>>>>> origin/main
    }
  } catch (error) {
    console.error('Error reading existing rates:', error);
    existing = [];
  }

<<<<<<< HEAD
    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel
        }
      })
    });

    if (!response.ok) {
      throw new Error(`EasyPost API error: ${response.status}`);
    }
=======
  // Calculate shipping rates based on destination and weight
  const baseRate = 10;
  const weightMultiplier = weight * 0.5;
  const distanceMultiplier = destination === 'US' ? 1 : 1.5;
  const totalRate = Math.round((baseRate + weightMultiplier) * distanceMultiplier * 100) / 100;

  const newRate = {
    id: Date.now().toString(),
    destination,
    weight,
    dimensions,
    rate: totalRate,
    timestamp: new Date().toISOString()
  };
>>>>>>> origin/main

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
<<<<<<< HEAD
    res.end(JSON.stringify({ error: 'Failed to retrieve shipping rates' }));
=======
    res.end(JSON.stringify({ error: 'Failed to save rate' }));
>>>>>>> origin/main
  }
}