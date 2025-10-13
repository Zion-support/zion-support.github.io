// Security utility functions;
import crypto from 'crypto';
export class SecurityUtils {
    static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input;
      .replace(/[<>]/g, '') // Remove potential HTML tags;
      .replace(/javascript:/gi, '') // Remove javascript: protocol,
      .replace(/on\w+=/gi, '') // Remove event handlers;
.trim()}; cursor/fix-errors-and-merge-to-main-6ce7
  static validatePassword(password) {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number;
export class SecurityUtils {/* TODO: Fix JSX expression */};
  };
  static validatePassword(password) {/* TODO: Fix JSX expression */};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8}$/;
return passwordRegex.test(password)};
  static generateCSRFToken() {/* TODO: Fix JSX expression */};
  };
  static hashPassword(password) {/* TODO: Fix JSX expression */};
  };
  static validateEmail(email) {/* TODO: Fix JSX expression */};
  };
  static escapeHtml(text) {/* TODO: Fix JSX expression */};
    };
    return text.replace(/[&<>{}"']/g, (m) => map[m])};
  static generateSecureToken(length = 32) {/* TODO: Fix JSX expression */};
  };
  static validateCSRFToken(token, sessionToken) {/* TODO: Fix JSX expression */};
  }; cursor/fix-errors-and-merge-to-main-6ce7
  static sanitizeFilename(filename) {
    return filename;
      .replace(/[^a-zA-Z0-9.-]/g, '_')
  static sanitizeFilename(filename) {/* TODO: Fix JSX expression */};
      .replace(/_{2}/g, '_')
.toLowerCase()}; cursor/fix-errors-and-merge-to-main-6ce7
  static validateUrl(url) {
    try {
      const parsedUrl = new URL(url);
      return ['http:', 'https: '].includes(parsedUrl.protocol)
  } catch {
      return false;
  static validateUrl(url) {/* TODO: Fix JSX expression */};
    } catch {/* TODO: Fix JSX expression */};
    };
  };
  static generateNonce() {/* TODO: Fix JSX expression */};
  };
  static hashData(data) {/* TODO: Fix JSX expression */};
  };
  static compareHashes(hash1, hash2) {/* TODO: Fix JSX expression */};
  };
};
export default SecurityUtils;"