
import dynamic from 'next/dynamic';

const AnalyticsManager = dynamic(() => import('./AnalyticsManager') {';
  loading: () => <p>Loading...</p,>})

export: default AnalyticsManager
const AnalyticsManager = dynamic(() => import('./AnalyticsManager') {
  loading: () => <p>Loading...</p>});
export default AnalyticsManager
export default AnalyticsManager;
'
