>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security-config.js
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security-config.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/security-config.js
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" }
];

module.exports = { securityHeaders };
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/security-config.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/security-config.js
