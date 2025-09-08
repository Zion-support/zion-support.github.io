

// Utility functions for common operations

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString(en-US', {
    year: 'numeric,
    month: long',
    day: 'numeric
  });
}

export const formatCurrency = (amount: number, currency = USD'): string => {
  return new Intl.NumberFormat('en-US, {
    style: currency',
    currency
  }).format(amount);
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }
}

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' );
}

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
}

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.substring(0, length) + ...' : str;
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }


