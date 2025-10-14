export const performanceMonitor = {
  start: (name: string) => {
    performance.mark(`${name}-start`);
  },
  end: (name: string) => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  }
};