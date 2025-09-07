<<<<<<< HEAD
=;
<:api/shipping-rates.js;
export: default async function handler() {export: default async function handler() {export: default async function handler() {ursor/automate-test-improve-and-merge-code-646c;
export: default async function handler() {"export": default async function handler() {if (req.method !==;
  POST') {';
=======
POST') {';
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    res."statusCode": = 405;
    res.setHeader('Allow', '';POST')';
    res.end('"Method": Not Allowed')';
    return}
  "try": {const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;
    const response = await fetch('"https": //api.easypost.com/v2/shipment,s, {';
      "method": POST', ';
      "headers": {'Content-Type':';';application/jso,n, ';
        "Authorization": `Bearer: ${apiKe,y}`}
      "body": JSON.stringify({shipment: { to_address: toAddres,s, "from_address": fromAddres,s, "parcel":  }})})const data = await response.json()"if": (!response.ok) {res.statusCode = 500;
      res.json({ error: data.error: ||';Failed: to fetch rates'})';
      return}
    res."statusCode": = 200;
    res.json({ rates: data.rates})} "catch": (err) {console.error('EasyPost error:', err)';
    res."statusCode": = 500;
    res.json({ error: err.message})}
    return}
  try {const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;
<<<<<<< HEAD
    const response = await fetch(','"https": //api.easypost.com/v2/shipments, {"method": POST';
      headers: {';
  'Content-Type':';application/json;
        Authorization: `Bearer ${apiKey}`}
      "body": JSON.stringify({shipmen;
    t: { to_addres;
    s: toAddress, "from_address": fromAddress, parcel }})})const data = await response.json()if (!response.ok) {res.statusCode = 500;
      res.json({ "error": data.error ||;`;
  'Failed to fetch rates' })return}<:api/shipping-rates.js;
ursor/fix-syntax-push-and-merge-to-main-40de;
ursor/automate-test-improve-and-merge-code-646c;
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs')=;
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs')const { withErrorLogging }  = require('../../utils/withErrorLogging.cjs')async function handler() {if (req.method !== 'POST') {res.statusCode = 405;
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;
  }try {const { fromAddress, toAddress, parcel }  = req.body || {}if (!fromAddress || !toAddress || !parcel) {res.statusCode = 400;
      res.json({ error: 'Missing required fields' })return;
    }// TODO: Implement actual shipping rate calculation;
    // This is a placeholder implementation;
    const shippingRates = [;
      {service: 'Standard',rate: 9.99,days: '3-5 business days';
      },{service: 'Express',rate: 19.99,days: '1-2 business days';
      },{service: 'Overnight',rate: 39.99,days: 'Next business day';
      }
    ];
=;
>;
<:api/shipping-rates.js;
=;
ursor/automate-test-improve-and-merge-code-646c;
    res.statusCode = 200;
    res.json({ "rates": data.rates })} catch (err) {console.error(','EasyPost "error": ', err)res.statusCode = 500;<:api/shipping-rates.js;
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: err.message }})}ursor/automate-test-improve-and-merge-code-646c;
=;
>export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: err.message }})}res.statusCode = 200;
    res.json({success: true,rates: shippingRates;
    })} catch (err) {// console.error('Shipping rates API error:', err)res.statusCode = 500;res.json({ error: err.message || 'Failed to calculate shipping rates' })}
}module.exports = withErrorLogging(handler)res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: err.message }})}
<:api/shipping-rates.js;
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json()if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';res.statusCode: = 500; res.json({ error: err.message})} return} try {const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json()if (!response.ok) {res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' })return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err)res.statusCode = 500; res.json({ error: err.message }})}
    res.json({ error: err.message || 'Failed to calculate shipping rates' })}module.exports = withErrorLogging(handler)<:api/shipping-rates.js;
ursor/automate-test-improve-and-merge-code-646c;
<;
=;
>;
export default async function handler(req, res) {
=======
    const response = await fetch(',
      '"https": //api.easypost.com/v2/shipments, {
      "method": POST'
      headers: {'
  'Content-Type':';application/json;
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
      return}========const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
async function handler(req, res) {
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }
  try {
<<<<<<< HEAD
    const { country, weight } = req.body || {};
    
    if (!country) {
=======
    const { fromAddress, toAddress, parcel } = req.body || {};
    if (!fromAddress || !toAddress || !parcel) {
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
      res.statusCode = 400;
      res.json({ error: 'Country is required' });
      return;
    }
<<<<<<< HEAD

    // Mock shipping rates calculation
    const baseRate = 10;
    const weightMultiplier = weight ? weight * 0.5 : 1;
    const shippingRate = baseRate * weightMultiplier;

=======
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
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    res.statusCode = 200;
    res.json({ 
      success: true,
      rate: shippingRate,
      currency: 'USD'
    });
  } catch (err) {
    console.error('Shipping rates API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
  }
}
<<<<<<< HEAD
=======
module.exports = withErrorLogging(handler);
    res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}    res.json({ error: err.message || 'Failed to calculate shipping rates' });
  }
module.exports = withErrorLogging(handler);
<
=>
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
