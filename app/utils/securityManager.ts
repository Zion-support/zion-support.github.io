// Security manager utilities

export function securityManager() {
  return {
    sanitizeInput: (input: string) => {
      return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    },
    validateCSRF: (token: string) => {
      // Basic CSRF token validation
      return token && token.length > 0;
    },
    checkXSS: (input: string) => {
      const xssPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
      return !xssPattern.test(input);
    }
  };
}
