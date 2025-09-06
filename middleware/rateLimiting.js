const rate_limit = require ('express - rate - limit');
;
// General rate limiting;
const general_limiter = rate_limit ({
  window_ms: 15 * 60 * 1000, // 15 minutes;
  max: 100, // limit each IP to 100 requests per window_ms;
  message: 'Too many requests from this IP, please try again later.',
  standard_headers: true,
  legacy_headers: false,
});
;
// Strict rate limiting for sensitive endpoints;
const strict_limiter = rate_limit ({
  window_ms: 15 * 60 * 1000, // 15 minutes;
  max: 5, // limit each IP to 5 requests per window_ms;
  message: 'Too many requests from this IP, please try again later.',
  standard_headers: true,
  legacy_headers: false,
});
;
// API rate limiting;
const api_limiter = rate_limit ({
  window_ms: 15 * 60 * 1000, // 15 minutes;
  max: 50, // limit each IP to 50 requests per window_ms;
  message: 'API rate limit exceeded, please try again later.',
  standard_headers: true,
  legacy_headers: false,
});
;
module.exports = {
  general_limiter,
  strict_limiter,
  api_limiter;
}
;