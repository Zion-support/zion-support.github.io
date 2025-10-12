<<<<<<< HEAD
// Form validation utilities
export const validateForm = (data: Record<string, any>) => {
  const errors: Record<string, string> = {};
  
  Object.keys(data).forEach(key => {
    if (!data[key]) {
      errors[key] = `${key} is required`;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
=======
// Utility file: formValidation;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
};