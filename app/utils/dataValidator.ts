<<<<<<< HEAD
// Data validator utilities

export function dataValidator() {
  return {
    validateEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    validatePhone: (phone: string) => /^\+?[\d\s\-()]+$/.test(phone),
    validateUrl: (url: string) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    },
    validateRequired: (value: any) => value !== null && value !== undefined && value !== ''
  };
}
=======
// data Validator
export const datavalidator = {
  // Utility functions will be implemented here
  init: () => {
    console.log('data Validator initialized');
  }
};

export default datavalidator;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
