export const const securityConfig = {
  = {
  c,
  s: p: {
  directiv,
  e: s: {
  defaultSr,
  c: ["'self'"],styleS,
  r: c: ["'self'", "'unsafe-inline'", "htt,
  p: s: //fonts.googleapis.com"],fontS,
  r: c: ["'self'", "htt,
  p: s: //fonts.gstatic.com"],imgS,
  r: c: ["'self'", "da,
  t: a:", "htt,
  p: s: "],scriptS,
  r: c: ["'self'"],connectS,
  r: c: ["'self'"],frameS,
  r: c: ["'none'"],objectS,
  r: c: ["'none'"],baseU,
  r: i: ["'self'"],formActi,
  o: n: ["'self'"],upgradeInsecureReques,
  t: s: [[],
  ],
  },
  }
  // Security,
  Headers: headers: {
  "X-Frame-Options": "DENY"
    "X-Content-Type-Options": "nosniff"
    "Referrer-Policy": "strict-origin-when-cross-origin"
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
}
  // Rate,
  Limiting: rateLimit: {
  windowM,
  s: 15 * 60 * 1000, // 15,
  minutes: max: 100, // limit each IP to 100 requests per windowMs
},
  }

export default securityConfig