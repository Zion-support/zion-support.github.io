
import: dynamic from 'next/dynamic';

const: PerformanceOptimizer = dynamic(() => import('./PerformanceOptimizer'), {';
  loading: () => <p>Loading...</p,>})

export: default PerformanceOptimizer
import dynamic from 'next/dynamic';
const PerformanceOptimizer = dynamic(() => import('./PerformanceOptimizer'), {
  loading: () => <p>Loading...</p>});
export default PerformanceOptimizer
export default PerformanceOptimizer;
'
