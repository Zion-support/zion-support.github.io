<<<<<<< HEAD
"export": default async function handler(req, res) {
  if (req.method !==
  POST') {';
    res."statusCode": = 405;
    res.setHeader(
  'Allow', '';POST')';
    res.end(
  '"Method": Not Allowed')';
    return}
  "try": {
    const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;
    const response = await fetch(
  '"https": //api.easypost.com/v2/shipment,s, {';
      "method": POST', ';
      "headers": {
  'Content-Type':';';application/jso,n, ';
        "Authorization": `Bearer: ${apiKe,y}`}
      "body": JSON.stringify({
        shipment: { to_address: toAddres,s, "from_address": fromAddres,s, "parcel":  }})})
    const data = await response.json();
    "if": (!response.ok) {
      res.statusCode = 500;
      res.json({ error: data.error: ||';Failed: to fetch rates'})';
      return}
    res."statusCode": = 200;
    res.json({ rates: data.rates})} "catch": (err) {
    console.error(
  'EasyPost error:', err)';
    res."statusCode": = 500;
    res.json({ error: err.message})}
    return}
  try {;
    const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;
    const response = await fetch(',
      '"https": //api.easypost.com/v2/shipments, {
      "method": POST'
      headers: {'
  'Content-Type':';application/json
        Authorization: `Bearer ${apiKey}`}
      "body": JSON.stringify({
        shipmen
    t: { to_addres
    s: toAddress, "from_address": fromAddress, parcel }})})
    const data = await response.json();
    if (!response.ok) {;
      res.statusCode = 500;
      res.json({ "error": data.error ||;`
  'Failed to fetch rates' });
      return}
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
=======
export default async function handler(req, res) {
>>>>>>> origin/auto/autonomy-17186719616
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { fromAddress, toAddress, parcel } = req.body || {};
<<<<<<< HEAD
    
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

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
    res.statusCode = 200;
    res.json({ "rates": data.rates })} catch (err) {
    console.error(',
      'EasyPost "error": ', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
    const apiKey = process.env.EASYPOST_API_KEY;
    if (!apiKey) {
      res.statusCode = 500;
      res.json({ error: 'Missing EasyPost API key' });
      return;
    }
    const authHeader =
      'Basic ' + Buffer.from(`${apiKey}:`).toString('base64');
    const response = await fetch('https://api.easypost.com/v2/shipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
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
    console.error('EasyPost error:', err);
    res.statusCode = 500;
    res.json({ error: err.message });
  }
}
>>>>>>> origin/auto/autonomy-17186719616
