<<<<<<< HEAD
export default async function handler(req, res) {
=======
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
<<<<<<< HEAD
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
          parcel: parcel,
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
    console.error('EasyPost error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}
=======
    
    if (!fromAddress || !toAddress || !parcel) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // TODO: Implement actual shipping rate calculation
    // This is a placeholder implementation
    const shippingRates = [
      {
        service: 'Standard',
        rate: 9.99,
        days: '3-5 business days'
      },
      {
        service: 'Express',
        rate: 19.99,
        days: '1-2 business days'
      },
      {
        service: 'Overnight',
        rate: 39.99,
        days: 'Next business day'
      }
    ];

    res.statusCode = 200;
    res.json({ 
      success: true, 
      rates: shippingRates 
    });
  } catch (err) {
    // console.error('Shipping rates API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
