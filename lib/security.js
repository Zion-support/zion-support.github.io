// Security utility functions
import crypto from 'crypto';
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
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
export class SecurityUtils {
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8344
=======
=======
>>>>>>> origin/main

export class SecurityUtils {
  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;

    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }
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
=======
>>>>>>> origin/main

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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
>>>>>>> 73aae067a8789e7f94c7cf242d65c42e6717fb43
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-efe9
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9008
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6abd
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ee0f
=======
>>>>>>> origin/main
  static escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
=======
      "'": '&#039;',
>>>>>>> origin/main
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  static sanitizeHtml(html) {
    // Basic HTML sanitization - in production, use a proper library like DOMPurify
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
  }
}
