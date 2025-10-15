
interface PerformanceMetrics {
// Track render performance;
useEffect(() => {
renderStartTime.current = performance.now();
renderCount.current += 1;

return () => {
console.warn(`Slow render detected in ${componentName}`, {
renderTime,;
renderCount: renderCount.current,;
componentName;

});
};
};
});

// Debounced function for expensive operations;
func: T,;
delay: number;
): ((...args: Parameters<T>) => void) => {
let timeoutId: NodeJS.Timeout;
return (...args: Parameters<T>)  = > {;
clearTimeout(timeoutId);,
timeoutId = setTimeout(() => func(...args), delay);
};
},;
[
]);

// Throttled function for frequent operations;
func: T,;
delay: number;
): ((...args: Parameters<T>) => void) => {
let lastCall = 0;
return (...args: Parameters<T>) => {
if (now - lastCall >= delay) {
lastCall = now;
func(...args);,
};
};
},;
[
]);

// Memoization helper;
cache.set(key, result);
return result;
}) as T;
},;
[
]);

// Performance measurement helper;
return duration;
},;
[
componentName

]);

return {
debounce,;
throttle,;
memoize,;
measurePerformance,;
renderCount: renderCount.current;
};
};
/**;
* Hook for memory usage monitoring;
*/;
if (memory) {
const used = memory.usedJSHeapSize / 1024 / 1024; // MB;
const total = memory.totalJSHeapSize / 1024 / 1024; // MB;
const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB;
if (used > limit * 0.8) {,
useEffect(() => {'"";"
if (process.env.NODE_ENV === 'development' && 'memory' in performance) {";"
const checkMemory  = () => {
const memory  = (performance as any).memory;
if (memory) {
const used  = memory.usedJSHeapSize / 1024 / 1024; // MB;
const total  = memory.totalJSHeapSize / 1024 / 1024; // MB;
const limit  = memory.jsHeapSizeLimit / 1024 / 1024; // MB;
if (used > limit * 0.8) {
console.warn(`High memory usage detected in ${componentName}`, {
used: `${used.toFixed(2)}MB`,;
total: `${total.toFixed(2)}MB`,;
limit: `${limit.toFixed(2)}MB`,;
percentage: `${((used / limit) * 100).toFixed(2)}%`;
});
};
};
};
return () => clearInterval(interval);
}
}, [componentName])
}
export default usePerformance'"'"
