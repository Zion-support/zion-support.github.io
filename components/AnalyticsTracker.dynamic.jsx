import dynamic from 'next/dynamic';
const AnalyticsTracker = dynamic(() => import('./AnalyticsTracker'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export default AnalyticsTracker;
