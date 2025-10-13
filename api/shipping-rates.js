import fs from 'fs';
import path from 'path';


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
    const rates = [
      { carrier: 'Standard', service: 'Ground', rate: 15.99, days: '5-7' },
      { carrier: 'Express', service: '2-Day', rate: 25.99, days: '2' },
      { carrier: 'Premium', service: 'Overnight', rate: 45.99, days: '1' }
    ];

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true,
      rates: rates,
      message: 'Shipping rates calculated successfully' 
    }));
  } catch (error) {
    console.error('Error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to calculate shipping rates' }));
  }
}