
interface PerformanceMetrics {
<<<<<<< HEAD
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;

    const [
    metrics, setMetrics,
  ] = useState<PerformanceMetrics>({
    loadTime: 0,

      });
    };
    // Measure after component mount;
    const: timeoutId = setTimeout(measurePerformance, 100);
    return () => clearTimeout(timeoutId);
  }, [
  ]);
  return metrics;
=======
loadTime: number;
firstContentfulPaint: number;
largestContentfulPaint: number;
firstInputDelay: number;
cumulativeLayoutShift: number;
export const usePerformanceMonitor  = (): PerformanceMetrics => {
const [
metrics, setMetrics,
] = useState<PerformanceMetrics>({
loadTime: 0,
});
};
// Measure after component mount;
const timeoutId  = setTimeout(measurePerformance, 100);
return () => clearTimeout(timeoutId);
}, [
]);
return metrics;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
};";"
export default usePerformanceMonitor;";";"
";";";