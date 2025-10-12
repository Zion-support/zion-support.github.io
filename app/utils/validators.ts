// Validation utilities
export const validators = {
  required: (value: any) => value != null && value !== '',
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  minLength: (value: string, min: number) => value.length >= min
};