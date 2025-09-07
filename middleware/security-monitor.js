
// Security monitoring and logging
export const securityLogger = {
  logAttempt: (type, details) => {
    console.log(`[SECURITY] ${type}:`, details);
    // In production, send to security monitoring service
  },
  
  logSuspiciousActivity: (activity) => {
    console.warn(`[SECURITY ALERT] Suspicious activity:`, activity);
    // Send alert to security team
  },
  
  logAuthFailure: (ip, userAgent) => {
    console.log(`[SECURITY] Auth failure from IP: ${ip}, UA: ${userAgent}`);
  }
};

export const securityMiddleware = (req, res, next) => {
  // Log all requests
  securityLogger.logAttempt('REQUEST', {
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    url: req.url,
    method: req.method
  });
  
  next();
};
