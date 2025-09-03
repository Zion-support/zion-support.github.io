import dynamic from 'next/dynamic';
const PerformanceEnhancer = dynamic(() => import('./PerformanceEnhancer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default PerformanceEnhancer
=======
export default PerformanceEnhancer;
'
>>>>>>> main
