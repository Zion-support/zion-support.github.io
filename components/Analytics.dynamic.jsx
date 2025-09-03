import dynamic from 'next/dynamic';
const Analytics = dynamic(() => import('./Analytics'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default Analytics
=======
export default Analytics;
'
>>>>>>> main
