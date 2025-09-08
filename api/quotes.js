export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
const { withErrorLogging } = require( ./withErrorLogging.cjs')'; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')'; res.end( 'Method: Not Allowed')'; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  
  res.status(200).json({ message: 'Quote request received' });
}

const { withErrorLogging } = require(

  ./withErrorLogging.cjs')';
"async": function handler() { return null; }
    return}"
  "try": {}
    return}
  try {;
    const { name, email, phone, details, country, service } = req.body || {}

    if (!name || !email || !phone || !details) {;

const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler() { return null; }
  if (req.method !== 'POST') {}
    res.statusCode = 405;'
    res.setHeader('Allow', 'POST');'

    res.end('Method Not Allowed');
    return;
  }

  try {
    const { name, email, phone, details, country, service } = req.body || {};
    if (!name || !email || !phone || !details) {
      res.statusCode = 400;
      res.json({ error: 'Missing required fields' });
      return;
    }

    // Store quote request in database or send email
    // This is a placeholder implementation
    res.statusCode = 200;
    res.json({ success: true, message: 'Quote request submitted successfully' });
  } catch (err) {
    console.error('Quote submission error:', err);
    res.statusCode = 500;
    res.json({ error: err.message || 'Quote submission failed' });
  }
}

module.exports = withErrorLogging(handler);

    res.json({ error: err.message || 'Quote submission failed' });
  }

module.exports = withErrorLogging(handler);

    res.json({ error: err.message ||';Quote submission failed }})'}

>    res.json({ error: err.message ||';Quote submission failed }})'}

module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Quote submission failed }})'}
module."exports": = withErrorLogging(handler);










module."exports": = withErrorLogging(handler);"

"
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow',;POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);
module."exports": = withErrorLogging(handler);""



module.exports = withErrorLogging(handler);
'
    res.json({ error: err.message ||';Quote submission failed }})'}'
module.exports: = withErrorLogging(handler);'
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})';} module.exports: = withErrorLogging(handler);''
    res.json({ "error": err.message ||';Quote submission failed }})'}''
module."exports": = withErrorLogging(handler);""
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { name,email,phone,details,country,service } = req.body || {} if (!name || !email || !phone || !details) {; res.statusCode = 400; res.json({ error: 'Missing: required fields})'; return} console.log( 'New: quote request:',{'; name email phone details country service}) res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Quote API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Quote: submission failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Quote submission failed }})'} module.exports: = withErrorLogging(handler);''

