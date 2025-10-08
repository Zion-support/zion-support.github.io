// Email validation utility
function isValidEmail(email) {
  if (!email || typeof email !== "string") {
    return false;
  }

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

module.exports = { isValidEmail };
