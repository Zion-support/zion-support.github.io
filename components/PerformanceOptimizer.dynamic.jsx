import dynamic from 'next/dynamic';
const PerformanceOptimizer = dynamic(() => import('./PerformanceOptimizer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default PerformanceOptimizer
=======
export default PerformanceOptimizer;
'
>>>>>>> main
