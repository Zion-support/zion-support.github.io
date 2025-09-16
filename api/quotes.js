<<<<<<< HEAD
=======
const { withSentry } = require('./withSentry.cjs');;const fs = require('fs');;  if (req.method !== 'POST') {'';    res.setHeader('Allow', POST');;    res.end('Method Not Allowed');;      res.json({ error: Missing required fields' });;    fs.appendFileSync('quote_requests.log', JSON.stringify(logEntry) + \n');;    console.error('Quote API error:', err);;    res.json({ error: Quote submission failed' });
>>>>>>> origin/auto/autonomy-17186719616
=======
=;
<:api/quotes.js;
ursor/automate-test-improve-and-merge-code-646c;
const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler)const { withErrorLogging } = require(./withErrorLogging.cjs')';
"async": function handler() {if (req.method !==';POST') {';
    res."statusCode": = 405;
    res.setHeader('Allow', '';POST')';
    res.end('"Method": Not Allowed')';
    return}
  "try": {return}
  try {const { name, email, phone, details, country, service }  = req.body || {}
    if (!name || !email || !phone || !details) {<:api/quotes.js;
ursor/fix-syntax-push-and-merge-to-main-40de;
ursor/automate-test-improve-and-merge-code-646c;
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs')<=;
>const { withErrorLogging } = require('../../utils/withErrorLogging.cjs')const { withErrorLogging }  = require('../../utils/withErrorLogging.cjs')async function handler() {if (req.method !== 'POST') {res.statusCode = 405;
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;
  }try {const { name, email, phone, details }  = req.body || {}if (!name || !email || !phone || !details) {res.statusCode = 400;
      res.json({ error: 'Missing required fields' })return;
    }
ursor/automate-test-improve-and-merge-code-646c;
const { withErrorLogging }  = require('../../utils/withErrorLogging.cjs')async function handler() {if (req.method !== 'POST') {res.statusCode = 405;
    res.setHeader('Allow', 'POST')res.end('Method Not Allowed')return;
  }try {const { name, email, phone, details }  = req.body || {}if (!name || !email || !phone || !details) {ursor/automate-test-improve-and-merge-code-646c;
      res.statusCode = 400;
      res.json({ "error": 'Missing: required fields})';
      return}
    console.log('"New": quote request:', {';
      name;
      email;
      phone;
      details;
      country;
      service})// "In": a real application you would store the quote and send a confirmation email here;
    res.statusCode: = 200;
    res.json({ success: true})} "catch": (err) {console.error('Quote API error: ', err)res."statusCode": = 500;
    res.json({ error: err.message: ||';Quote: submission failed})}', err)res.statusCode = 500;
=;
<:api/quotes.js;
    res.json({ error: err.message ||';Quote submission failed }})'}
=;
>    res.json({ error: err.message ||';Quote submission failed }})'}
    res.json({ error: err.message ||';Quote submission failed }})'}module.exports: = withErrorLogging(handler)const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler)res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler)<:api/quotes.js;
=const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler)ursor/automate-test-improve-and-merge-code-646c;
=;
const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler)const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler)res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler)const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler)ursor/automate-test-improve-and-merge-code-646c;
    res.json({ error: err.message || 'Quote submission failed' })}
    res.json({ error: err.message || 'Quote submission failed' })}module.exports = withErrorLogging(handler)res.json({ error: err.message ||';Quote submission failed }})'}
module.exports: = withErrorLogging(handler)const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler)res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler)const { withErrorLogging }  = require( ./withErrorLogging.cjs')';async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';res.end( 'Method: Not Allowed')';return} try: { return} try {const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err)res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err)res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler)ursor/automate-test-improve-and-merge-code-646c;
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details } = req.body || {};
    
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // Here you would typically save to a database or send to an email service
    // For now, we'll just return success
    res.statusCode = 200;
    res.json({ success: true });
  } catch (err) {
    console.error('Quote API error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}
>>>>>>> origin/merge-pr-12271
