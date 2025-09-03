import dynamic from 'next/dynamic';
const AnalyticsManager = dynamic(() => import('./AnalyticsManager'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default AnalyticsManager
=======
export default AnalyticsManager;
'
>>>>>>> main
