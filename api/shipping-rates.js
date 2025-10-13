import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'shipping-rates.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { destination, weight } = req.body;
  if (!destination || !weight) {
    return res.status(400).json({ error: 'Destination and weight are required' });
  }

  let rates = [];
  try {
    const data = fs.readFileSync(file, 'utf8');
    rates = JSON.parse(data);
  } catch (error) {
    console.error('Error:', error);
    console.error('Error reading existing rates:', error);
  }

  const distanceMultiplier = destination === 'US' ? 1 : 1.5;
  const baseRate = 10;
  const weightRate = weight * 2;
  const totalRate = (baseRate + weightRate) * distanceMultiplier;

  const newRate = {
    id: Date.now().toString(),
    destination,
    weight,
    rate: totalRate,
    timestamp: new Date().toISOString()
  };

  try {
    rates.push(newRate);
    fs.writeFileSync(file, JSON.stringify(rates, null, 2));
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(JSON.stringify(newRate));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).end(JSON.stringify({ error: 'Failed to save rate' }));
  }
}