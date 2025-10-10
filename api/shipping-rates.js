const { withSentry } = require('./withSentry.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
=======
>>>>>>> origin/resolve-merge-conflicts
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
    const apiKey = process.env.EASYPOST_API_KEY;

    if (!apiKey) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      return res.status(500).json({ error: 'EasyPost API key not configured' });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'EasyPost API key not configured' }));
      return;
=======
>>>>>>> origin/resolve-merge-conflicts
    }

    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
<<<<<<< HEAD
<<<<<<< HEAD
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
=======
      headers: {)
        'Content-Type': 'application/json')
        Authorization: `Bearer ${apiKey}`)
      })
      body: JSON.stringify({)
        shipment: {)
          to_address: toAddress;)
          from_address: fromAddress;)
          parcel)})
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`},
=======
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
>>>>>>> origin/resolve-merge-conflicts
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel
        }
<<<<<<< HEAD
          from_address: fromAddress,
          to_address: toAddress,
          parcel: parcel
        }
=======
>>>>>>> origin/resolve-merge-conflicts
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
      },
      body: JSON.stringify({
        shipment: {
          to_address: toAddress,
          from_address: fromAddress,
          parcel: parcel
        }
      })
    });

<<<<<<< HEAD
    if (!response.ok) {
<<<<<<< HEAD
      throw new Error(`EasyPost API error: ${response.status}`);
=======
      return res.status(400).json({ error: data.error || 'Failed to fetch rates' });
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: data.error || 'Failed to fetch rates' }));
      return;
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
=======
    const data = await response.json();

    if (!response.ok) {
>>>>>>> origin/resolve-merge-conflicts
    }

    const data = await response.json();
    const rates = data.shipment.rates || [];

    res.statusCode = 200;
<<<<<<< HEAD
<<<<<<< HEAD
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'Shipping rates retrieved successfully',
      rates: rates.map(rate => ({
        id: rate.id,
        service: rate.service,
        carrier: rate.carrier,
        rate: rate.rate,
        currency: rate.currency,
        deliveryDays: rate.delivery_days
      }))
    }));
  } catch (error) {
    console.error('Shipping rates error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Failed to retrieve shipping rates' }));
=======
    res.json({ success: true, rates: data.rates });
  } catch (err) {
    console.error('Shipping rates error:', err);
    res.status(500).json({ error: err.message });
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message }));
    res.statusCode = 500;
    res.json({ error: err.message });
>>>>>>> cursor/fix-errors-and-merge-to-main-e8ab
=======
    res.json({ success: true, rates: data.rates });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
>>>>>>> origin/resolve-merge-conflicts
  }
}

module.exports = withSentry(handler);