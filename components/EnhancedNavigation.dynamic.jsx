import dynamic from 'next/dynamic';
const EnhancedNavigation = dynamic(() => import('./EnhancedNavigation'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default EnhancedNavigation
=======
export default EnhancedNavigation;
'
>>>>>>> main
