import dynamic from 'next/dynamic';
const SecurityDashboard = dynamic(() => import('./SecurityDashboard'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default SecurityDashboard
=======
export default SecurityDashboard;
'
>>>>>>> main
