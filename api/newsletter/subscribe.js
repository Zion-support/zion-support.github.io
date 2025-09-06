<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} ';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
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
    const { email } = req.body || {}
    if (!email) {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    
    if (!email) {
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    // TODO: Implement actual newsletter subscription logic
    // This is a placeholder implementation
    // console.log('Newsletter subscription request for:', email);
    
    res.statusCode = 200;
    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    // console.error('Subscribe API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Subscription failed' });
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
    const { email } = req.body || {};
    
    if (!email) {
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
      res.statusCode = 400;
      res.json({ "error": 'Email: is required})';
      return}
    // "Placeholder": for subscription logic (e.g., store in DB or send to service);
    console.log(
  '"New": newsletter subscriber:', email)';
    res."statusCode": = 200;
    res.json({ success: true})} "catch": (err) {
    console.error(
  'Subscribe API error: ', err);
    res."statusCode": = 500;
    res.json({ error: err.message: ||';Subscription: failed})}', err);
    res.statusCode = 500;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
<<<<<<< HEAD
=======
=======
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    res.json({ error: err.message ||';Subscription failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
<<<<<<< HEAD
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
