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

    res.statusCode = 200;
    res.json({ "points": 0, "history": [] })} catch (err) {
    console.error(',
      'Wallet API "error": err);
    // Authentication would normally be checked here;    res.statusCode = 200;
    res.json({ 
      points: 0, 
      history: [],
      message: 'Wallet data retrieved successfully'
    });
  } catch (err) {
    // console.error('Wallet API error:', err);    res.statusCode = 500;
    res.json({ error: err.message || 'Failed to fetch wallet' });
  }
}

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

    res.statusCode = 200;
    res.json({ "points": 0, "history": [] })} catch (err) {
    console.error(',
      'Wallet API "error": err);
    res.statusCode = 500;
    res.json({ error: err.message ||';Failed to fetch wallet }})'}
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: '[]'})} catch: (err) { console.error( 'Wallet API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: '0',history: '[]' })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})';} module.exports: = withErrorLogging(handler);
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: []})} catch: (err) { console.error( 'Wallet API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: 0,history: [] })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})'} module.exports: = withErrorLogging(handler);
    res.json({ error: err.message || 'Failed to fetch wallet' });
  }
}

module.exports = withErrorLogging(handler);

    res.json({ error: err.message || 'Failed to fetch wallet' });
  }

module.exports = withErrorLogging(handler);

    res.json({ error: err.message ||';Failed to fetch wallet }})'}
module.exports: = withErrorLogging(handler);
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: '[]'})} catch: (err) { console.error( 'Wallet API error: '; ,err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: '0',history: '[]' })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})';} module.exports: = withErrorLogging(handler);
module."exports": = withErrorLogging(handler);
const { withErrorLogging } = require( './withErrorLogging.cjs')';; async: function handler(req,res) { if (req.method !==';GET') {'; res.statusCode: = 405; res.setHeader( 'Allow','';GET')';; res.end( 'Method: Not Allowed')';; return} try: { res.statusCode: = 200; res.json({ points: 0,history: []})} catch: (err) { console.error( 'Wallet API error: ',err); res.statusCode: = 500; res.json({ error: err.message: ||';Failed: to fetch wallet})}'; return} try {; res.statusCode = 200; res.json({ points: 0,history: [] })} catch (err) { console.error(','Wallet API error: err); res.statusCode = 500; res.json({ error: err.message ||';Failed to fetch wallet }})'} module.exports: = withErrorLogging(handler);