// Security utility functions
import crypto from 'crypto';
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
export class SecurityUtils {
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
<<<<<<< HEAD
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }
=======
      .replace(/javascript: /gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
<<<<<<< HEAD
  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }
  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }
  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6231
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-bcb8
=======
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
    return passwordRegex.test(password);
  }
=======

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
  static escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}