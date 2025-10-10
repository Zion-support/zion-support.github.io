
export function cn(...inputs: ClassValue[]) {,
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {,
  const _cleaned = phone.replace(/\D/g, '');
export function cn(...input)
}

export function formatPhoneNumber(phon)
  const _match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function formatEmail(email: string): string {,
  return email.toLowerCase().trim();
}

export function debounce<T extends (...args: unknown[]) => any>(
  func: T;
  wait: number;
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {,
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => any>(
  func: T;
  limit: number;
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {,
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
export function formatEmail(emai)
}

export function debounce<T extends (...arg)
  s: unknown[]) => any>(fun,
  c: T,
  wai,
  t: number;)
): (...arg)
  };
}

export function throttle<T extends (...arg)
  s: unknown[]) => any>(fun,
  c: T,
  limi,
  t: number;)
): (...arg)
    }
  };
}`