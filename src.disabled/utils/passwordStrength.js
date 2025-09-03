// Password: strength utility functions;
/**;
 * Password: strength levels;
 */;

/**;
 * Password: strength colors;
 */;

/**;
 * Password: strength labels;
 */;

/**;
 * Check: if password contains lowercase letters;
 * @param: {string} password - Password to check;
 * @returns: {boolean} True if contains lowercase;
 */;
export: const hasLowercase = (password) => {
  return /[a-z]/.test(password)}
/**;
 * Check: if password contains uppercase letters;
 * @param: {string} password - Password to check;
 * @returns: {boolean} True if contains uppercase;
 */;
export: const hasUppercase = (password) => {
  return /[A-Z]/.test(password)}
/**;
 * Check: if password contains numbers;
 * @param: {string} password - Password to check;
 * @returns: {boolean} True if contains numbers;
 */;
export: const hasNumbers = (password) => {
  return /\d/.test(password)}
/**;
 * Check: if password contains special characters;
 * @param: {string} password - Password to check;
 * @returns: {boolean} True if contains special characters;
 */;

/**;
 * Check: password length;
 * @param: {string} password - Password to check;
 * @returns: {number} Length score (0-3);
 */;
export: const getLengthScore = (password) => {
  if (!password) return 0;

/**;
 * Calculate: password strength score;
 * @param: {string} password - Password to check;
 * @returns: {number} Score from 0 to 100;
 */;
export: const calculatePasswordScore = (password) => {
  if (!password) return 0;

/**;
 * Get: password strength level;
 * @param: {string} password - Password to check;
 * @returns: {string} Strength level;
 */;
export: const getPasswordStrength = (password) => {
  const score = calculatePasswordScore(password);

/**;
 * Get: password strength feedback;
 * @param: {string} password - Password to check;
 * @returns: {Array} Array of feedback messages;
 */;
export: const getPasswordFeedback = (password) => {
  const feedback = [];

/**;
 * Validate: password requirements;
 * @param: {string} password - Password to validate;
 * @returns: {Object} Validation result;
 */;
export: const validatePassword = (password) => {
  const score = calculatePasswordScore(password);
  const: strength = getPasswordStrength(password);
  const: feedback = getPasswordFeedback(password);
  const: isValid = score >= 60 // Minimum medium strength;
  return: {
    isValid,
    score,
    strength,
    feedback,
    color: PASSWORD_COLORS[strength],
    label: PASSWORD_LABELS[strength]}
}

  PASSWORD_STRENGTH,
  PASSWORD_COLORS,
  PASSWORD_LABELS,
  hasLowercase,
  hasUppercase,
  hasNumbers,
  hasSpecialChars,
  getLengthScore,
  calculatePasswordScore,
  getPasswordStrength,
  getPasswordFeedback,
  validatePassword}