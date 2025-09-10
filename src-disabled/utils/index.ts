

:src_backup/utils/common.ts
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


};
};
}
  );
};