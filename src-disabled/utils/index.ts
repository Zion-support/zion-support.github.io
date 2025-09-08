<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/utils/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Utility functions;
export const formatCurrency = (amount: number, currency = 'USD'): string => {return new Intl.NumberFormat('en-US', {style: 'currency',currency}).format(amount)}export const formatDate = (date: string | Date, options?: Intl.DateTimeFormatOptions): string => {const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'long',day: 'numeric',...options}).format(dateObj)}export const formatPhoneNumber = (phone: string): string => {const cleaned = phone.replace(/\D/g, '')const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)if (match) {return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}export const validateEmail = (email: string): boolean => {const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email)}export const slugify = (text: string): string => {return text;
    .toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')}export const debounce = <T extends (...args: any[]) => any>(func: T,wait: number;
): ((...args: Parameters<T>) => void) => {let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {clearTimeout(timeout)timeout = setTimeout(() => func(...args), wait)}}export const throttle = <T extends (...args: any[]) => any>(func: T,limit: number;
): ((...args: Parameters<T>) => void) => {let inThrottle: boolean;
  return (...args: Parameters<T>) => {if (!inThrottle) {func(...args)inThrottle = true;
      setTimeout(() => (inThrottle = false), limit)}
  }}export const generateId = (): string => {return Math.random().toString(36).substr(2, 9)}export const capitalize = (str: string): string => {return str.charAt(0).toUpperCase() + str.slice(1)}export const truncateText = (text: string, maxLength: number): string => {if (text.length <= maxLength) return text;
  return text.substr(0, maxLength).trim() + '...';
}export const isClient = (): boolean => {return typeof window !== 'undefined';
}export const isServer = (): boolean => {return typeof window === 'undefined';
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Utility functions for common operations

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

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
  };

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
<<<<<<< HEAD


=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
