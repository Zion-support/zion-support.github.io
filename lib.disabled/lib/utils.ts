
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const _cleaned = phone.replace(/\D/g, '');
  const _match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function formatEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function debounce<T extends (...args: unknown[]) => any>(</T>func</T>: T,
  wait: number
): (...args: Parameters<T>) => void {</T>let</T> timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {</T>clearTimeout</T>(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => any>(</T>func</T>: T,
  limit: number
): (...args: Parameters<T>) => void {</T>let</T> inThrottle: boolean;
  return (...args: Parameters<T>) => {</T>if</T> (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}