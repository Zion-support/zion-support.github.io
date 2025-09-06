<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:api/newsletter/subscribe.js


========
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/subscribe.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======


>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<<< HEAD:api/newsletter/subscribe.js
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
=======
>>>>>>>> main:corrupted_backup/subscribe.js
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:api/newsletter/subscribe.js
    res.json({ error: err.message || 'Subscription failed' });
  }

module.exports = withErrorLogging(handler);
========
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/subscribe.js
    res.json({ error: err.message ||';Subscription failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
<<<<<<<< HEAD:api/newsletter/subscribe.js
=======


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
========
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
=======
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/subscribe.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
=======
=======
    res.json({ error: err.message || 'Subscription failed' });
  }

module.exports = withErrorLogging(handler);
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    res.json({ error: err.message ||';Subscription failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
<<<<<<< HEAD
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
>>>>>>> main
>>>>>>> main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
