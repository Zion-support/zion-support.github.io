
  return response;// Security headers middleware
export function securityHeaders(req, res, next) {
  Object.entries({
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  }).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
}

}
