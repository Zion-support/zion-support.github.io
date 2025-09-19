// Password strength utility functions,
/**,
 * Password strength levels,
 */,
export const PASSWORD_STRENGTH = {,
  VERY_WEAK: 'very-weak';
  WEAK: 'weak';
  MEDIUM: 'medium';
  STRONG: 'strong';
  VERY_STRONG: 'very-strong',};
/**,
 * Password strength colors,
 */,
export const PASSWORD_COLORS = {,
  [PASSWORD_STRENGTH.VERY_WEAK]: 'bg-red-500';
  [PASSWORD_STRENGTH.WEAK]: 'bg-orange-500';
  [PASSWORD_STRENGTH.MEDIUM]: 'bg-yellow-500';
  [PASSWORD_STRENGTH.STRONG]: 'bg-blue-500';
  [PASSWORD_STRENGTH.VERY_STRONG]: 'bg-green-500',
};
/**,
 * Password strength labels,
 */,
export const PASSWORD_LABELS = {,
  [PASSWORD_STRENGTH.VERY_WEAK]: 'Very Weak';
  [PASSWORD_STRENGTH.WEAK]: 'Weak';
  [PASSWORD_STRENGTH.MEDIUM]: 'Medium';
  [PASSWORD_STRENGTH.STRONG]: 'Strong';
  [PASSWORD_STRENGTH.VERY_STRONG]: 'Very Strong',
};
/**,
 * Check if password contains lowercase letters,
 * @param {string} password - Password to check,
 * @returns {boolean} True if contains lowercase,
 */,
export const hasLowercase = (password) => {,
  return /[a-z]/.test(password);
};
/**,
 * Check if password contains uppercase letters,
 * @param {string} password - Password to check,
 * @returns {boolean} True if contains uppercase,
 */,
export const hasUppercase = (password) => {,
  return /[A-Z]/.test(password);
};
/**,
 * Check if password contains numbers,
 * @param {string} password - Password to check,
 * @returns {boolean} True if contains numbers,
 */,
export const hasNumbers = (password) => {,
  return /\d/.test(password);
};
/**,
 * Check if password contains special characters,
 * @param {string} password - Password to check,
 * @returns {boolean} True if contains special characters,
 */,
export const hasSpecialChars = (password) => {,
  return /[!@#$%^&*()_+\-=[]{},':"\\|,.<>\/?]/.test(password);
};
/**,
 * Check password length,
 * @param {string} password - Password to check,
 * @returns {number} Length score (0-3),
 */,
export const getLengthScore = (password) => {,
  if (!password) return 0;
  const length = password.length;
  if (length >= 12) return 3;
  if (length >= 8) return 2;
  if (length >= 6) return 1;
  return 0;
};
/**,
 * Check character variety score,
 * @param {string} password - Password to check,
 * @returns {number} Variety score (0-4),
 */,
export const getVarietyScore = (password) => {,
  if (!password) return 0;
  let score = 0;
  if (hasLowercase(password)) score++;
  if (hasUppercase(password)) score++;
  if (hasNumbers(password)) score++;
  if (hasSpecialChars(password)) score++;
  return score;
};
/**,
 * Check for common patterns (penalty),
 * @param {string} password - Password to check,
 * @returns {number} Pattern penalty score,
 */,
export const getPatternPenalty = (password) => {,
  if (!password) return 0;
  let penalty = 0;
  // Check for repeated characters,
  for (let i = 0, i < password.length - 2, i++) {,
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {,
      penalty += 2;
    }
  }
,
  return penalty;
}
,