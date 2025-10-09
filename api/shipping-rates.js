const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Shipping API not configured' });
    }

    if (!fromAddress || !toAddress || !parcel) {
      return res.status(400).json({ error: 'From address, to address, and parcel details are required' });
    }

    // Mock shipping rates for now
    const rates = [
      {
        service: 'Standard',
        carrier: 'UPS',
        rate: 15.99,
        deliveryDays: 3
      },
      {
        service: 'Express',
        carrier: 'UPS',
        rate: 25.99,
        deliveryDays: 1
      },
      {
        service: 'Overnight',
        carrier: 'UPS',
        rate: 45.99,
        deliveryDays: 1
      }
    ];

    res.status(200).json({ success: true, rates });
  } catch (err) {
    console.error('Error calculating shipping rates:', err);
    res.status(500).json({ error: 'Failed to calculate shipping rates' });
  }
}

module.exports = withSentry(handler);