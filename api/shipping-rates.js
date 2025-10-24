import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
const file = path.join(dir, 'shipping-rates.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const { destination, weight } = req.body;
  
  if (!destination || !weight) {
    return res.status(400).json({ error: 'Destination and weight are required' });
  }

  try {
    const { 
      destination, 
      weight, 
      dimensions, 
      serviceType = 'standard' 
    } = req.body || {};

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
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

    const data = await response.json();
    const rates = data.shipment.rates || [];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: true, 
      rates,
      destination,
      weight
    }));

  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to calculate shipping rates' }));
  }
}

module.exports = withSentry(handler);
