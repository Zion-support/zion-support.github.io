<<<<<<< HEAD
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
=======
// security Manager
export const securitymanager = {
  // Utility functions will be implemented here
  init: () => {
    console.log('security Manager initialized');
  }
};

export default securitymanager;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
