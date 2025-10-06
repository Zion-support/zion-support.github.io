<<<<<<< HEAD
const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
=======
export default async function handler(req, res) {
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

<<<<<<< HEAD
  const { weight, destination } = req.body || {};

  if (!weight || !destination) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields: weight and destination' });
    return;
  }

  try {
    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = weight * 0.5;
    const destinationMultiplier = destination === 'international' ? 2 : 1;
    
    const standardRate = baseRate + (weightMultiplier * destinationMultiplier);
    const expressRate = standardRate * 1.5;
    const overnightRate = standardRate * 2;

    const rates = {
      standard: {
        name: 'Standard Shipping',
        price: standardRate,
        estimatedDays: destination === 'international' ? '7-14' : '3-5'
      },
      express: {
        name: 'Express Shipping',
        price: expressRate,
        estimatedDays: destination === 'international' ? '3-7' : '1-2'
      },
      overnight: {
        name: 'Overnight Shipping',
        price: overnightRate,
        estimatedDays: '1'
      }
    };

    res.statusCode = 200;
    res.json({ success: true, rates });
  } catch (error) {
=======
  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;
    
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
          parcel
        }
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
    console.error('EasyPost error:', err);
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
    res.statusCode = 500;
    res.json({ error: 'Failed to calculate shipping rates' });
  }
<<<<<<< HEAD
}

module.exports = withSentry(handler);
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-13eb
