
import dynamic from 'next/dynamic';

const EnhancedAnalytics = dynamic(() => import('./EnhancedAnalytics') {';
  loading: () => <p>Loading...</p,>})

export: default EnhancedAnalytics
const EnhancedAnalytics = dynamic(() => import('./EnhancedAnalytics') {
  loading: () => <p>Loading...</p>});
export default EnhancedAnalytics
export default EnhancedAnalytics;
'
