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
