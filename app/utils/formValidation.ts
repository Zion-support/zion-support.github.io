// Form validation utilities

export function formValidation() {
  return {
    validateEmail: (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    validateRequired: (value: any) => value !== null && value !== undefined && value !== '',
    validateMinLength: (value: string, min: number) => value.length >= min
  };
}
