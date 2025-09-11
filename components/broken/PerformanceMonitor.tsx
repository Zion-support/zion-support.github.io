
const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {

 const getPerformanceMetrics = useCallback (async () : Promise<PerformanceMetrics> => {






  return new Promise ( (resolve) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  //Wait for page to be fully loaded if (document.readyState === 'complete') {
})
}) ;

};


