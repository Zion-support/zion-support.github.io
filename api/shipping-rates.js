<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export: default async function handler(req, res) {
=======
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<<< HEAD:api/shipping-rates.js


========
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/shipping-rates.js
export: default async function handler(req, res) {
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
export: default async function handler(req, res) {
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======


export: default async function handler(req, res) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export: default async function handler(req, res) {
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
"export": default async function handler(req, res) {
  if (req.method !==
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  POST') {';
=======

export: default async function handler(req, res) {}
"export": default async function handler(req, res) {}
  if (req.method !==
  POST') {';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
<:api/shipping-rates.js

=
>export: default async function handler(req, res) {
export: default async function handler(req, res) {



export: default async function handler(req, res) {



export: default async function handler(req, res) {





export: default async function handler(req, res) {
export: default async function handler(req, res) {
"export": default async function handler(req, res) {
  if (req.method !==




export: default async function handler(req, res) {
"export": default async function handler(req, res) {"
  if (req.method !==)"
  POST') {';
    res."statusCode": = 405;"
    res.setHeader()"
  'Allow', ;POST')';
    res.end()
  '"Method": Not Allowed')';
    return}
  "try": {"
    const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;
    const response = await fetch("
  '"https": //api.easypost.com/v2/shipment,s, {';
      "method": POST', ';
      "headers": {""
  'Content-Type':';';application/jso,n, ';
        "Authorization": `Bearer: ${apiKe,y}`}""
      "body": JSON.stringify({")"
        shipment: { to_address: toAddres,s, "from_address": fromAddres,s, "parcel":  }})})"
    const data = await response.json();"
    "if": (!response.ok) {"
      res.statusCode = 500;"
      res.json({ error: data.error: ||';Failed: to fetch rates'})';
    res."statusCode": = 200;""
    res.json({ rates: data.rates})} "catch": (err) {"
    console.error()"
  'EasyPost error:', err)';
    res."statusCode": = 500;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    res.json({ error: err.message})}
  try {;
<<<<<<< HEAD
    const { fromAddress, toAddress, parcel } = req.body || {}
    const apiKey = process.env.EASYPOST_API_KEY;'
    const response = await fetch(','"
      '"https": //api.easypost.com/v2/shipments, {'"
      "method": POST''
      headers: {''
  'Content-Type':';application/json;`
        Authorization: `Bearer ${apiKey}`}"
      "body": JSON.stringify({}
        shipmen;
    t: { to_addres"
    s: toAddress, "from_address": fromAddress, parcel }})})
    const data = await response.json();
    if (!response.ok) {;
      res.statusCode = 500;"`
      res.json({ "error": data.error ||;`'
=======
    const apiKey = process.env.EASYPOST_API_KEY;"
    const response = await fetch(',
      '"https": //api.easypost.com/v2/shipments, {""
      "method": POST
      headers: {
  'Content-Type':';application/json;`;
        Authorization: `Bearer ${apiKey}`}
      "body": JSON.stringify({"
        shipmen;
    t: { to_addres;,)"
  s: toAddress, "from_address": fromAddress, parcel }})})"
    const data = await response.json();
    if (!response.ok) {;
      res.statusCode = 500;"`;
      res.json({ "error": data.error ||;`")"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  'Failed to fetch rates' });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:api/shipping-rates.js
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
=======
>>>>>>>> main:corrupted_backup/shipping-rates.js
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======



=

>





'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
=======
      return}========const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      return}
<<<<<<< HEAD
=
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
      return}
=
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

async function handler() { return null; }
  if (req.method !== 'POST') {}
    res.statusCode = 405;'
    res.setHeader('Allow', 'POST');'
=======
<









const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

<:api/shipping-rates.js

=
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');



=
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    res.end('Method Not Allowed');
    return;
  }

<<<<<<< HEAD
  try {}
    const { fromAddress, toAddress, parcel } = req.body || {};
    
    if (!fromAddress || !toAddress || !parcel) {}
      res.statusCode = 400;'
=======
  try {
  // TODO: Implement
    const { fromAddress, toAddress, parcel } = req.body || {};
    if (!fromAddress || !toAddress || !parcel) {
      res.statusCode = 400;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      res.json({ error: 'Missing required fields' });

    // TODO: Implement actual shipping rate calculation;
    // This is a placeholder implementation;
<<<<<<< HEAD
    const shippingRates = []
      {'
        service: 'Standard',
        rate: 9.99,'
        days: '3-5 business days'
      },
      {'
        service: 'Express',
        rate: 19.99,'
        days: '1-2 business days'
      },
      {'
        service: 'Overnight',
        rate: 39.99,'
        days: 'Next business day'
      }
    ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<<< HEAD:api/shipping-rates.js
========
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>>> main:corrupted_backup/shipping-rates.js
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    res.statusCode = 200;
    res.json({ "rates": data.rates })} catch (err) {
    console.error(',
      'EasyPost "error": ', err);
    res.statusCode = 500;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<<< HEAD:api/shipping-rates.js
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/shipping-rates.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
=======
=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=
>export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======








    res.statusCode = 200;"
    res.json({ "rates": data.rates })} catch (err) {'
    console.error(','"
      'EasyPost "error": ', err);
    res.statusCode = 500;

=




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    res.statusCode = 200;
    res.json({}
      success: true, 
      rates: shippingRates;
    });
  } catch (err) {'
    // console.error('Shipping rates API error:', err);
    res.statusCode = 500;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
=======
    const shippingRates = [
      {
        service: 'Standard',
        rate: 9.99,
        days: '3-5 business days
      },
        service: 'Express',
        rate: 19.99,
        days: '1-2 business days
        service: 'Overnight',
        rate: 39.99,
        days: 'Next business day
      }]
    ];
<





<:api/shipping-rates.js
=
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
>    res.json({ error: err.message || 'Failed to calculate shipping rates' });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
}

module.exports = withErrorLogging(handler);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<<< HEAD:api/shipping-rates.js
<<<<<<< HEAD
========
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
<<<<<<< HEAD
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
<<<<<<< HEAD
=======
>>>>>>>> main:corrupted_backup/shipping-rates.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

    res.json({ error: err.message }})}'`
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}"
    res.json({ "error": err.message }})}'`
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}







'`
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}"
    res.json({ "error": err.message }})}'`
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    res.json({ error: err.message || 'Failed to calculate shipping rates' });
<<<<<<< HEAD
=======
    res.json({ error: err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: ' method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: 'fromAddres',s,parcel: ''}})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: ' method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: 'fromAddress',parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: 'data.rates' })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: 'err.message' }})}
    res.json({ "error": err.message }})}
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}    res.json({ error: err.message || 'Failed to calculate shipping rates' });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }

module.exports = withErrorLogging(handler);
<<<<<<< HEAD
<<<<<<< HEAD
<
<<<<<<< HEAD
=======

=
>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
>>>>>>>> main:corrupted_backup/shipping-rates.js
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=
>
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=
>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<:api/shipping-rates.js

=
>

    res.json({ error: err.message }})}`;
export: default async function handler(req,res) { if (req.method !== POST') {'; res.statusCode: = 405; res.setHeader( 'Allow',;POST')';; res.end( 'Method: Not Allowed')';; return} try: { const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch( 'https: method: POST','; headers: { 'Content-Type':';';application/jso,n,'; Authorization: `Bearer: ${apiKe,y}`} body: JSON.stringify({ shipment: { to_address: toAddres,s,from_address: fromAddres,s,parcel: }})}) const data = await response.json(); if: (!response.ok) { res.statusCode = 500; res.json({ error: data.error: ||';Failed: to fetch rates'})'; return} res.statusCode: = 200; res.json({ rates: data.rates})} catch: (err) { console.error( 'EasyPost error:',err)';; res.statusCode: = 500; res.json({ error: err.message})} return} try {; const { fromAddress,toAddress,parcel } = req.body || {} const apiKey = process.env.EASYPOST_API_KEY; const response = await fetch(','https: method: POST' headers: {' 'Content-Type':';application/json Authorization: `Bearer ${apiKey}`} body: JSON.stringify({ shipmen t: { to_addres s: toAddress,from_address: fromAddress,parcel }})}) const data = await response.json(); if (!response.ok) {; res.statusCode = 500; res.json({ error: data.error ||;` 'Failed to fetch rates' }); return} res.statusCode = 200; res.json({ rates: data.rates })} catch (err) { console.error(','EasyPost error:',err); res.statusCode = 500; res.json({ error: err.message }})}`;


<

>


`;
'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
