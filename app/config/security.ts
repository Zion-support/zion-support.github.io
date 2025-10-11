  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [,
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        'https: //www.googletagmanager.com',
        'https: //www.google-analytics.com',
      ],
      styleSrc: ["'self'", "'unsafe-inline'", 'https: //fonts.googleapis.com'],
      fontSrc: ["'self'", 'https: //fonts.gstatic.com'],
      imgSrc: ["'self'", 'data: ', 'https: ', 'blob: '],
      connectSrc: ["'self'", 'https: //www.google-analytics.com', 'https: //analytics.google.com'],
      frameSrc: ["'self'"],
      objectSrc: ["'none'"],
  // Security Headers;
  headers: {,
  // Security Headers
  headers: {
    'X-DNS-Prefetch-Control': 'on',
}
  max: 100, // Limit each IP to 100 requests per windowMs;
  message: 'Too many requests from this IP, please try again later.',}}
/**;
 * CORS configuration;
 */;
export const corsConfig = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http: //localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  resave: false,
  saveUninitialized: false,
  cookie: {,
    secure: process.env['NODE_ENV'] === 'production',
    httpOnly: true,
export const validationPatterns = {}
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+?[1-9]\d{1,14}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  noSpecialChars: /^[a-zA-Z0-9\s]+$/,
}
    return input,
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript: /gi, '') // Remove javascript: protocol,
    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * 256)}}
  }
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}
