import dynamic from 'next/dynamic';
const EnhancedAnalytics = dynamic(() => import('./EnhancedAnalytics'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default EnhancedAnalytics
=======
export default EnhancedAnalytics;
'
>>>>>>> main
