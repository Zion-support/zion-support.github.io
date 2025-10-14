export const securityConfig = {
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'"],
<<<<<<< HEAD
    'img-src': ["'self'", "data:", "https:"],
    'font-src': ["'self'", "data:"],
    'connect-src': ["'self'", "https:"]
=======
    'img-src': ["'self'", "data: ";, ",
    https: "];,
    'font-src': ["'self'", "data: "];,
    'connect-src': ["'self'", "https: "];
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
  }
};