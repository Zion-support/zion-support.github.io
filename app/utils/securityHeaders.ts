export const securityHeaders = {
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
<<<<<<< HEAD
    'img-src': ["'self'", "data: ";, ",
    https: "];,
    'font-src': ["'self'", "https: "];,
=======
    'img-src': ["'self'", "data: ";, "https: "],
    'font-src': ["'self'", "https: "],
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
    'connect-src': ["'self'", "https: "];
  },
  
  getCSPHeader: () => {
    return Object.entries(securityHeaders.csp)
      .map(([key, values]) => `${key} ${values.join(' ')}`)
<<<<<<< HEAD
      .join(' ')
    'font-src': ["'self'", "data: "];,
=======
      .join('; ')
    'font-src': ["'self'", "data: "],
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
    'connect-src': ["'self'"]
  }
}