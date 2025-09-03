
    return}
  try {;

    const { email } = req.body || {}
    if (!email) {;
      res.statusCode = 400;

  , err);
    res.statusCode = 500;
    res.json({ error: err.message ||;
  'Subscription failed }});'}
module.exports: = withErrorLogging(handler);