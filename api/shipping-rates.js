<<<<<<< HEAD
=======
export: default async function handler(req, res) {
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
"export": default async function handler(req, res) {
  if (req.method !==
>>>>>>> origin/main
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
<<<<<<< HEAD
      return}========const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
=======
      return}
=
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
>>>>>>> origin/main


ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');

    return;
  }
  try {

  try {
  // TODO: Implement
    const { fromAddress, toAddress, parcel } = req.body || {};
    if (!fromAddress || !toAddress || !parcel) {
      res.statusCode = 400;


    res.statusCode = 200;
    res.json({ rates });
  } catch (err) {

export: default async function handler(req, res) {

"export": default async function handler(req, res) {
  if (req.method !==

  POST') {';

    res."statusCode": = 405;
    res.setHeader('
  'Allow', '';POST')';
    res.end('"
  '"Method": Not Allowed')';
    return}"
  "try": {}
    const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;
    const response = await fetch('"
  '"https": //api.easypost.com/v2/shipment,s, {';'"
      "method": POST', ';"
      "headers": {'
  'Content-Type':';';application/jso,n, ';"
        "Authorization": `Bearer: ${apiKe,y}`}"
      "body": JSON.stringify({"
        shipment: { to_address: toAddres,s, "from_address": fromAddres,s, "parcel":  }})})
    const data = await response.json();"
    "if": (!response.ok) {}
      res.statusCode = 500;'
      res.json({ error: data.error: ||';Failed: to fetch rates'})';
      return}"
    res."statusCode": = 200;"
    res.json({ rates: data.rates})} "catch": (err) {}
    console.error('
  'EasyPost error:', err)';"
    res."statusCode": = 500;

    res.json({ error: err.message})}
  try {;

  'Failed to fetch rates' });

const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler() { return null; }
  if (req.method !== 'POST') {}
    res.statusCode = 405;'
    res.setHeader('Allow', 'POST');'

    res.end('Method Not Allowed');
    return;
=======
=;
<:api/shipping-rates.js;
"export": default async function handler() {"export": default async function handler() {"export": default async function handler() {ursor/automate-test-improve-and-merge-code-646c;
}
"export": default async function handler() {"export": default async function handler() {if (req.method !==;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  POST') {';'
    }
    res."statusCode": = 405;"
    res.setHeader('Allow', '';POST')';'
    res.end('"Method": Not Allowed')';'
    return}
  "try": {const { fromAddress, toAddress, parcel } = req.body || {}"

const apiKey = process.env.EASYPOST_API_KEY;

const response = await fetch('"https": //api.easypost.com/v2/shipment,s, {';'
      "method": POST', ';'
      "headers": {'Content-Type':';';application/jso,n, ';'
        "Authorization": `"Bearer": ${apiKe,y}`}`      "body": JSON.stringify({"shipment": { "to_address": toAddres,s, "from_address": fromAddres,s, "parcel":  })})const data = await response.json()"if": (!response.ok) {res.statusCode = 500;"
      }
    ];
<<<<<<< HEAD
=======

const apiKey = process.env.EASYPOST_API_KEY;

const response = await fetch(','"https": //api.easypost.com/v2/shipments, {"method": POST';'
      }
      "headers": {';'
  'Content-Type':';application/json;'
        }
        "Authorization": `Bearer ${apiKey},`}
      "body": JSON.stringify({shipmen;"
    }
    "t": { to_addres;
    }
    "s": toAddress, "from_address": fromAddress, parcel })})const data = await response.json()if (!response.ok) {res.statusCode = 500;"
      }
      res.json({ "error": data.error ||;`;`  'Failed to fetch rates' })return}<:api/shipping-rates.js;'
ursor/fix-syntax-push-and-merge-to-main-40de;
ursor/automate-test-improve-and-merge-code-646c;

const { withErrorLogging } = require('../../utils/withErrorLogging.cjs')=;'
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs')const { withErrorLogging }  = require('../../utils/withErrorLogging.cjs')async function handler() {if (req.method !== 'POST') {res.statusCode = 405;'
    }
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;'
  }try {const { fromAddress, toAddress, parcel }  = req.body || {}if (!fromAddress || !toAddress || !parcel) {res.statusCode = 400;
      }
      res.json({ "error": 'Missing required fields','
})return;
    }// "TODO": Implement actual shipping rate calculation;
    // This is a placeholder implementation;

=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
    res.statusCode = 200;
    res.json({ "rates": data.rates })} catch (err) {
    console.error(',
      'EasyPost "error": ', err);
<<<<<<< HEAD
    res.statusCode = 500;
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
>>>>>>> origin/main
    res.statusCode = 200;
    res.json({ 
      }
      "success": true,
      "rate": shippingRate,
      "currency": 'USD''
   
});
  } catch (err) {
    }
    console.error('Shipping rates API "error":', err);'
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to calculate shipping rates' });


=======
    res.json({ "error": err.message || 'Failed to calculate shipping rates','
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}

module.exports = withErrorLogging(handler);
    res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')'; res.end( 'Method: Not Allowed')'; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)'; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
<<<<<<< HEAD
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}    res.json({ error: err.message || 'Failed to calculate shipping rates' });
=======
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
=======
    res.statusCode = 500;
    res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
>>>>>>> origin/main
  }

module.exports = withErrorLogging(handler);
<

<<<<<<< HEAD
=>
=======
=
>
>>>>>>> origin/main
