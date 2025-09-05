<<<<<<< HEAD
;,
import dynamic from 'next/dynamic';';,
const AnalyticsManager = dynamic(() => import('./AnalyticsManager'), {',
  "loading": () => null,",
;  "ssr": 'false'});',
export default AnalyticsManager;,
;
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
import dynamic from 'next/dynamic'; const AnalyticsManager = dynamic(() => import('./AnalyticsManager'),{ loading: () => null,ssr: 'false,}); export default AnalyticsManager;',
import dynamic from 'next/dynamic';
const AnalyticsManager = dynamic(() => import('./AnalyticsManager'), {
  "loading": () => null,
  "ssr": 'false'});
export default AnalyticsManager;
<<<<<<< HEAD
import dynamic from 'next/dynamic'; const AnalyticsManager = dynamic(() => import('./AnalyticsManager'),{ loading: () => null,ssr: 'false',}); export default AnalyticsManager;
=======
import dynamic from 'next/dynamic'; const AnalyticsManager = dynamic(() => import('./AnalyticsManager'),{ loading: () => null,ssr: 'false',}); export default AnalyticsManager;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
