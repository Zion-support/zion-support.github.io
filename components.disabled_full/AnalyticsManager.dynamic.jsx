<<<<<<< HEAD
import dynamic from 'next/dynamic';
const AnalyticsManager = dynamic(() => import('./AnalyticsManager'), {
  "loading": () => null,
  "ssr": 'false'});
export default AnalyticsManager;
=======
import dynamic from 'next/dynamic'; const AnalyticsManager = dynamic(() => import('./AnalyticsManager'),{ loading: () => null,ssr: 'false',}); export default AnalyticsManager;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
