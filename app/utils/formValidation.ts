<<<<<<< HEAD
// Form validation utilities

export function formValidation() {
  return {
    validateEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    validateRequired: (value: any) => value !== null && value !== undefined && value !== '',
    validateMinLength: (value: string, min: number) => value.length >= min
  };
}
=======
// form Validation
export const formvalidation = {
  // Utility functions will be implemented here
  init: () => {
    console.log('form Validation initialized');
  }
};

export default formvalidation;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
