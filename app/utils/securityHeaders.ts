export const security Headers = {
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],

    'connect-src': ["'self'", "https: "]},
  get CSPHeader: () => {
    return Object.entries(security Headers.csp)
      .map(([key, values]) => `${key} ${values.join(' ')}`)

    'connect-src': ["'self'"]
  }
