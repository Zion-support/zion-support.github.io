<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> pr-11914
const { withErrorLogging } = require(
  './withErrorLogging.cjs')';
"async": function handler(req, res) {
  if (req.method !==';GET') {';
    res."statusCode": = 405;
    res.setHeader(
  'Allow', '';GET')';
    res.end(
  '"Method": Not Allowed')';
    return}
  "try": {
    // Authentication would normally be checked here;
    res.statusCode: = 200;
    res.json({ points: 0, "history": []})} "catch": (err) {
    console.error(
  'Wallet API error: ', err);
    res."statusCode": = 500;
    res.json({ error: err.message: ||';Failed: to fetch wallet})}';
    return}
  try {;
<<<<<<< HEAD
    // Authentication would normally be checked here;    res.statusCode = 200;
    res.json({ 
      points: 0, 
      history: [],
      message: 'Wallet data retrieved successfully'
    });
  } catch (err) {
    // console.error('Wallet API error:', err);
    res.statusCode = 500;
=======
    // Authentication would normally be checked here;
=======
const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET');
    res.end('Method Not Allowed');
    return;
  }

  try {
    // Authentication would normally be checked here
    // This is a placeholder implementation
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
    res.statusCode = 200;
    res.json({ "points": 0, "history": [] })} catch (err) {
    console.error(',
      'Wallet API "error": err);
    res.statusCode = 500;
<<<<<<< HEAD
>>>>>>> pr-11914
    res.json({ error: err.message ||';Failed to fetch wallet }})'}
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: '[]'})} catch: (err) { console.error( 'Wallet API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: '0',history: '[]' })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})';} module.exports: = withErrorLogging(handler);
module."exports": = withErrorLogging(handler);
<<<<<<< HEAD
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: []})} catch: (err) { console.error( 'Wallet API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: 0,history: [] })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})'} module.exports: = withErrorLogging(handler);
=======
<<<<<<< HEAD
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: []})} catch: (err) { console.error( 'Wallet API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: 0,history: [] })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})'} module.exports: = withErrorLogging(handler);
=======
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: []})} catch: (err) { console.error( 'Wallet API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: 0,history: [] })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})'} module.exports: = withErrorLogging(handler);
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
    res.json({ error: err.message || 'Failed to fetch wallet' });
  }
}

module.exports = withErrorLogging(handler);
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> pr-11914
