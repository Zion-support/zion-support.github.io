
import dynamic from 'next/dynamic';

const AnalyticsTracker = dynamic(() => import('./AnalyticsTracker') {';
  loading: () => <p>Loading...</p,>})

export: default AnalyticsTracker
const AnalyticsTracker = dynamic(() => import('./AnalyticsTracker') {
  loading: () => <p>Loading...</p>});
export default AnalyticsTracker
export default AnalyticsTracker;
'
