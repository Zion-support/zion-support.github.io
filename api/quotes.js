<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:api/quotes.js


========
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/quotes.js
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require(
  ./withErrorLogging.cjs')';
"async": function handler(req, res) {
  if (req.method !==';POST') {';
    res."statusCode": = 405;
    res.setHeader(
  'Allow', '';POST')';
    res.end(
  '"Method": Not Allowed')';
    return}
  "try": {
    return}
  try {;
    const { name, email, phone, details, country, service } = req.body || {}
    if (!name || !email || !phone || !details) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:api/quotes.js
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
=======
>>>>>>>> main:corrupted_backup/quotes.js
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> main
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details } = req.body || {};
    
    if (!name || !email || !phone || !details) {
<<<<<<< HEAD
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // TODO: Implement actual quote submission logic
    // This is a placeholder implementation
    // console.log('Quote request from:', { name, email, phone, service });
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    // console.error('Quote API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}

>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details } = req.body || {};
    
    if (!name || !email || !phone || !details) {
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      res.statusCode = 400;
      res.json({ "error": 'Missing: required fields})';
      return}
    console.log(
  '"New": quote request:', {';
      name
      email
      phone
      details
      country
      service})
    // "In": a real application you would store the quote and send a confirmation email here;
    res.statusCode: = 200;
    res.json({ success: true})} "catch": (err) {
    console.error(
  'Quote API error: ', err);
    res."statusCode": = 500;
    res.json({ error: err.message: ||';Quote: submission failed})}', err);
    res.statusCode = 500;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<<< HEAD:api/quotes.js
    res.json({ error: err.message || 'Quote submission failed' });
  }

module.exports = withErrorLogging(handler);
========
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/quotes.js
    res.json({ error: err.message ||';Quote submission failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
<<<<<<<< HEAD:api/quotes.js
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
=======
=======
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> main
    res.json({ error: err.message || 'Quote submission failed' });
  }
}

module.exports = withErrorLogging(handler);
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/quotes.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    res.json({ error: err.message ||';Quote submission failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
<<<<<<< HEAD
<<<<<<< HEAD
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
    res.json({ error: err.message || 'Quote submission failed' });
  }
}

module.exports = withErrorLogging(handler);
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> main
>>>>>>> main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
