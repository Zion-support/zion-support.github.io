// Validators utility

export const validators = {
  email: (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  
  required: (value: any) => {
    return value !== null && value !== undefined && value !== '';
  }
};

export default validators;