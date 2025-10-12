<<<<<<< HEAD
// Validation utilities
export const validators = {
  required: (value: any) => value != null && value !== '',
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  minLength: (value: string, min: number) => value.length >= min
=======
// Utility file: validators;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
};