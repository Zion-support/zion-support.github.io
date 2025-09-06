 export function Analytics () {
  useEffect ( () => {
  // Performance monitoring if (typeof window !== "undefined") {
  // Core Web Vitals monitoring const observer = new PerformanceObserver ( (list) => {
  for (const entry of list.getEntries () ) {
  
}
});
}
});
}
}, []);
return null, // This component doesn't render anything 
}