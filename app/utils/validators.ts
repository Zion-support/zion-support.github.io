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
