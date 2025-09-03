
import: dynamic from 'next/dynamic';

const: PerformanceEnhancer = dynamic(() => import('./PerformanceEnhancer'), {';
  loading: () => <p>Loading...</p,>})

export: default PerformanceEnhancer
import dynamic from 'next/dynamic';
const PerformanceEnhancer = dynamic(() => import('./PerformanceEnhancer'), {
  loading: () => <p>Loading...</p>});
export default PerformanceEnhancer
export default PerformanceEnhancer;
'
