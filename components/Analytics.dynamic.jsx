import dynamic from 'next/dynamic';
const Analytics = dynamic(() => import('./Analytics'), {
  loading: () => <p>Loading...</p>,
});
export default Analytics;
