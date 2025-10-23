import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'shipping-rates.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

<<<<<<< HEAD
  const { destination, weight } = req.body;
  if (!destination || !weight) {
    return res.status(400).json({ error: 'Destination and weight are required' });
=======
  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      res.statusCode = 500;
      res.json({ error: 'EasyPost API key not configured' });
      return;
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      res.statusCode = 500;
      res.json({ error: data.error || 'Failed to fetch rates' });
      return;
    }

    res.statusCode = 200;
    res.json({ rates: data.rates });
  } catch (err) {
    //     res.statusCode = 500;
    res.json({ error: err.message });
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }

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
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to save rate' }));
  }
}