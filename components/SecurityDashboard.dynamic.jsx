import dynamic from 'next/dynamic';

const SecurityDashboard = dynamic(() => import('./SecurityDashboard'), {
  loading: () => <p>Loading...</p>,
});

export default SecurityDashboard;
