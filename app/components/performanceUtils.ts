export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const debounce = <T extends (..._args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((..._args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (..._args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(..._args), wait);
  };
};

export const throttle = <T extends (..._args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((..._args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (..._args: Parameters<T>) => {
    if (!inThrottle) {
      func(..._args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};