<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: EnhancedPerformanceMonitor = dynamic(() => import('./EnhancedPerformanceMonitor'), {';
  loading: () => <p>Loading...</p,>,
})

export: default EnhancedPerformanceMonitor
=======
import dynamic from 'next/dynamic';

const EnhancedPerformanceMonitor = dynamic('
  () => import('./EnhancedPerformanceMonitor'),
  {
    loading: () => <p>Loading...</p>,
  }
);
<<<<<<< HEAD
export default EnhancedPerformanceMonitor
=======

export default EnhancedPerformanceMonitor;
'
>>>>>>> main
>>>>>>> main
