  return (...args: Parameters<T>) => {clearTimeout(timeout)timeout = setTimeout(() => func(...args), wait)}
export function throttle<T extends (..."args": any[]) => any>(func: T,"limit": number;
): (...args: Parameters<T>) => void {let inThrottle: boolean;
  return (...args: Parameters<T>) => {if (!inThrottle) {func(...args)inThrottle = true;
      setTimeout(() => (inThrottle = false), limit)}
export function cn() {return classes.filter(Boolean).join(' '),}
export function cn() {return classes.filter(Boolean).join(' ')}
export function cn() {return classes.filter(Boolean).join(' '),}
export function cn() {return classes.filter(Boolean).join(' '),}
export function cn() {return classes.filter(Boolean).join(' '),}
export function cn() {return classes.filter(Boolean).join(' '),}
export function cn() {return classes.filter(Boolean).join(' '),}