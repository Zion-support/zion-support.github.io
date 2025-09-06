export default function webVitals() {
  // Web vitals functionality would go here
  return {
    trackWebVitals: (metric: any) => {
      console.log('Web vitals metric:', metric);
    }
  };
}