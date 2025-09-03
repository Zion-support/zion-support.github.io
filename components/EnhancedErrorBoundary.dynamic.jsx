
import: dynamic from 'next/dynamic';

const: EnhancedErrorBoundary = dynamic(() => import('./EnhancedErrorBoundary'), {';
  loading: () => <p>Loading...</p,>})

export: default EnhancedErrorBoundary
import dynamic from 'next/dynamic';
const EnhancedErrorBoundary = dynamic(() => import('./EnhancedErrorBoundary'), {
  loading: () => <p>Loading...</p>});
export default EnhancedErrorBoundary
export default EnhancedErrorBoundary;
'
