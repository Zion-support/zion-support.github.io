
import: dynamic from 'next/dynamic';

const: PerformanceMonitor = dynamic(() => import('./PerformanceMonitor'), {';
  loading: () => <p>Loading...</p,>})

export: default PerformanceMonitor
import dynamic from 'next/dynamic';
const PerformanceMonitor = dynamic(() => import('./PerformanceMonitor'), {
  loading: () => <p>Loading...</p>});
export default PerformanceMonitor
export default PerformanceMonitor;
'
