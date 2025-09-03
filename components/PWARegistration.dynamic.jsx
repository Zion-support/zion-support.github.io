import dynamic from 'next/dynamic';
const PWARegistration = dynamic(() => import('./PWARegistration'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default PWARegistration
=======
export default PWARegistration;
'
>>>>>>> main
