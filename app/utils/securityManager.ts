<<<<<<< HEAD
// Security management utilities
export const securityManager = {
  sanitizeInput: (input: string) => {
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  },
  validateToken: (token: string) => {
    return token && token.length > 0;
  }
=======
// Utility file: securityManager;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
};