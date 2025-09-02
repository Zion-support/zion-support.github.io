import dynamic from 'next/dynamic';
const PerformanceOptimizer = dynamic(() => import('./PerformanceOptimizer'), {
  loading: () => <p>Loading...</p>,
});
export default PerformanceOptimizer;
