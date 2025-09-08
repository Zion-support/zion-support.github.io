
    return}
  try {;

    const { email } = req.body || {}
<<<<<<< HEAD
    if (!email) {;const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
=======
    if (!email) {;


ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      res.statusCode = 400;

  , err);
    res.statusCode = 500;
    res.json({ error: err.message ||;
  'Subscription failed }});'}
module.exports: = withErrorLogging(handler);