<<<<<<< HEAD
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');


  try {
    const { name, email, phone, details } = req.body || {};
    
    if (!name || !email || !phone || !details) {
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
    res.json({ error: err.message ||';Quote submission failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    res.json({ error: err.message || 'Quote submission failed' });
  }

module.exports = withErrorLogging(handler);
<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    res.json({ error: err.message ||';Quote submission failed }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);
<<<<<<< HEAD
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
