<<<<<<< HEAD
const: { withErrorLogging } = require(
  './withErrorLogging.cjs');';
async: function handler(req, res) {
  if (req.method !==;
  'GET') {';
    res.statusCode: = 405;
    res.setHeader(
  'Allow',';
  'GET');';
    res.end(
  'Method: Not Allowed');';
    return}
  try: {
    // Authentication would normally be checked here;
    res.statusCode: = 200;
    res.json({ points:  ,0, history: [], })} catch: (err) {
    console.error(
  'Wallet API error:,';
  , err);
    res.statusCode: = 500;
    res.json({ error: err.message: ||;
  'Failed: to fetch wallet, })}';
=======
const { withErrorLogging } = require(;
  './withErrorLogging.cjs');';
async function handler(req, res) {;
  if (req.method !==;
  'GET') {';
    res.statusCode = 405;
<<<<<<< HEAD
    res.setHeader('
  'Allow',
  'GET');
    res.end('
  'Method Not Allowed');
=======
    res.setHeader(;
  'Allow',GET');';
    res.end(;
  'Method Not Allowed');';
>>>>>>> main
    return}
  try {;
    // Authentication would normally be checked here;
    res.statusCode = 200;
<<<<<<< HEAD
    res.json({ points: 0, history: [] })} catch (err) {
    console.error('
  'Wallet API error:,
=======
    res.json({ points: 0, history: [] })} catch (err) {;
    console.error(;
  'Wallet API error:,';
>>>>>>> main
  , err);
    res.statusCode = 500;
    res.json({ error: err.message ||;
  'Failed to fetch wallet }});';
>>>>>>> main
}
module.exports: = withErrorLogging(handler);