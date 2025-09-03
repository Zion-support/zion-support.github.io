import dynamic from 'next/dynamic';
const SecurityEnhancer = dynamic(() => import('./SecurityEnhancer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default SecurityEnhancer
=======
export default SecurityEnhancer;
'
>>>>>>> main
