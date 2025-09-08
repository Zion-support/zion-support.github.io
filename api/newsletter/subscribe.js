=======>>>>>>> origin/main
<<<<<<< HEAD=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
const { withSentry } = require('../withSentry.cjs');
const { isValidEmail } = require('../emailUtils.cjs');
const fs = require('fs');
const path = require('path');

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
const { withErrorLogging } = require( ./withErrorLogging.cjs')'; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')'; res.end( 'Method: Not Allowed')'; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} '; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }
  
  res.status(200).json({ message: 'Subscribed successfully' });
}

const { withErrorLogging } = require(

  ./withErrorLogging.cjs')';
"async": function handler() { return null; }
    return}"
  "try": {}
    return}
  try {;
    const { email } = req.body || {}

    if (!email) {;

const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler() { return null; }
  if (req.method !== 'POST') {}
    res.statusCode = 405;'
    res.setHeader('Allow', 'POST');'

    res.end('Method Not Allowed');
    return;
  }

  try {
    const { email } = req.body || {};
    
    if (!email) {
<<<<<<< HEAD
==============
=======>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
      res.statusCode = 400;
      res.json({ error: 'Email is required' });
      return;
    }

    if (!isValidEmail(email)) {
      res.statusCode = 400;
      res.json({ error: 'Invalid email format' });
      return;
    }

    // Store email in database or file
    const dataPath = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');
    let subscribers = [];
    
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      subscribers = JSON.parse(data);
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      res.statusCode = 200;
      res.json({ message: 'Email already subscribed' });
      return;
    }

    subscribers.push(email);
    fs.writeFileSync(dataPath, JSON.stringify(subscribers, null, 2));

    res.statusCode = 200;
    res.json({ message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.statusCode = 500;
    res.json({ error: 'Subscription failed' });
  }
}

module.exports = withSentry(handler);
>>>>>>> origin/main
=======module.exports = withErrorLogging(handler);

    res.json({ error: err.message || 'Subscription failed' });
  }

module.exports = withErrorLogging(handler);

    res.json({ error: err.message ||';Subscription failed }})'}

module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')'; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow',;POST')'; res.end( 'Method: Not Allowed')'; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)'; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
<:api/newsletter/subscribe.js

=
const { withErrorLogging } = require( ./withErrorLogging.cjs')'; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')'; res.end( 'Method: Not Allowed')'; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)'; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);

const { withErrorLogging } = require( ./withErrorLogging.cjs')'; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')'; res.end( 'Method: Not Allowed')'; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)'; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')'; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')'; res.end( 'Method: Not Allowed')'; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)'; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);

    res.json({ error: err.message || 'Subscription failed' });
  }
}

module.exports = withErrorLogging(handler);

    res.json({ error: err.message || 'Subscription failed' });
  }

module.exports = withErrorLogging(handler);

    res.json({ error: err.message ||';Subscription failed }})'}

>    res.json({ error: err.message ||';Subscription failed }})'}

module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);
    res.json({ "error": err.message ||';Subscription failed }})'}
module."exports": = withErrorLogging(handler);










module."exports": = withErrorLogging(handler);"

"
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow',;POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);
module."exports": = withErrorLogging(handler);""



module.exports = withErrorLogging(handler);
'
    res.json({ error: err.message ||';Subscription failed }})'}'
module.exports: = withErrorLogging(handler);'
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}'; ,err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})';} module.exports: = withErrorLogging(handler);''
    res.json({ "error": err.message ||';Subscription failed }})'}''
module."exports": = withErrorLogging(handler);""
const { withErrorLogging } = require( ./withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';POST') {'; res.statusCode: = 405; res.setHeader( 'Allow','';POST')';; res.end( 'Method: Not Allowed')';; return} try: { return} try {; const { email } = req.body || {} if (!email) {; res.statusCode = 400; res.json({ error: 'Email: is required})'; return} console.log( 'New: newsletter subscriber:',email)';; res.statusCode: = 200; res.json({ success: true})} catch: (err) { console.error( 'Subscribe API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Subscription: failed})}',err); res.statusCode = 500; res.json({ error: err.message ||';Subscription failed }})'} module.exports: = withErrorLogging(handler);''

>>>>>>> origin/main