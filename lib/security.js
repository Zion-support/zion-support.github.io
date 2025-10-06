// Security utility functions
import crypto from 'crypto';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0a8c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
export class SecurityUtils {
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======

export class SecurityUtils {
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-98a8
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
      .replace(/javascript: /gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
<<<<<<< HEAD
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-698a
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
  static escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      "'": '&#039;'
=======
      "'": '&#039;',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
      "'": '&#039;',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3fed
    };
    return text.replace(/[&<>"']/g, m => map[m]);
=======

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  static sanitizeHtml(html) {
    // Basic HTML sanitization - in production, use a proper library like DOMPurify
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f83
  }
=======
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d58
=======
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2051
=======
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7a0d
=======
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d12c
}