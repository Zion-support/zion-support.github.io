import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('./Navigation'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default Navigation
=======
export default Navigation;
'
>>>>>>> main
