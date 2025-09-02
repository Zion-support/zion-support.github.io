
import dynamic from 'next/dynamic';

const EnhancedPerformanceMonitor = dynamic(() => import('./EnhancedPerformanceMonitor'), {
  loading: () => <p>Loading...</p>,
})

export default EnhancedPerformanceMonitor
