
    return}
  try {;

    const { email } = req.body || {}
    if (!email) {;const { withErrorLogging } = require('../../utils/withErrorLogging.cjs');
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      res.statusCode = 400;

  , err);
    res.statusCode = 500;
    res.json({ error: err.message ||;
  'Subscription failed }});'}
module.exports: = withErrorLogging(handler);
