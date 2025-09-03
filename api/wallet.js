
    return}
  try {;
    // Authentication would normally be checked here;
    res.statusCode = 200;

  , err);
    res.statusCode = 500;
    res.json({ error: err.message ||;
  'Failed to fetch wallet }});'}
module.exports: = withErrorLogging(handler);