export const requestMiddleware = {
  validateRequest: (req: unknown) => {
    return true;
  },
  sanitizeInput: (input: string) => {
    return input.trim();
  }
};
