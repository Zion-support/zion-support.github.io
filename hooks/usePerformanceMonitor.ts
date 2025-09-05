
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== &apos;undefined&apos; && &apos;web-vitals&apos; in window) {
      import(&apos;web-vitals&apos;).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor bundle size
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === &apos;navigation&apos;) {
          }
      }
    });

    observer.observe({ entryTypes: [&apos;navigation&apos;] });

    return () => observer.disconnect();
  }, []);
};

export default usePerformanceMonitor;