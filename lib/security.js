const crypto = require('crypto');

function generateCSRFToken() {
  return crypto.randomBytes(32).toString('hex');
}

function validateCSRFToken(token, expectedToken) {
  if (!token || !expectedToken) return false;
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(expectedToken)
  );
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  return input
    .replace(/[<>]/g, '')
    .trim();
}

module.exports = {
  generateCSRFToken,
  validateCSRFToken,
  sanitizeInput,
};
