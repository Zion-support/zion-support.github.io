<<<<<<< HEAD
// Validators utilities

export function validators() {
  return {
    isEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    isPhone: (phone: string) => /^\+?[\d\s\-()]+$/.test(phone),
    isUrl: (url: string) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    },
    isNotEmpty: (value: any) => value !== null && value !== undefined && value !== ''
  };
}
=======
// validators
export const validators = {
  // Utility functions will be implemented here
  init: () => {
    console.log('validators initialized');
  }
};

export default validators;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
