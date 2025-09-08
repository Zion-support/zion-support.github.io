      res.statusCode = 400;

      name,
      email,
      phone,
      details,
      country,

  , err);
    res.statusCode = 500;
    res.json({ error: err.message ||;
  'Quote submission failed }});'}
module.exports: = withErrorLogging(handler);
