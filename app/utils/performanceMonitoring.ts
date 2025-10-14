export const performanceMonitoring = {
  start: (name: string) => {
    performance.mark(`${name}-start`
    performance.mark(`${name}-end`
    performance.measure(name, `${name}-start`, `${name}-end`
      console.log(`${name} took ${measure.duration.toFixed(2)}ms`
    performance.clearMarks(`${name}-start`
    performance.clearMarks(`${name}-end`