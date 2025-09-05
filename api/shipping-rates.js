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
    res.statusCode = 200;
    res.json({ "rates": data.rates })} catch (err) {
    console.error(',
      'EasyPost "error": ', err);
    res.statusCode = 500;
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
