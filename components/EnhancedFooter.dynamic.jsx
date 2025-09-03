import dynamic from 'next/dynamic';
const EnhancedFooter = dynamic(() => import('./EnhancedFooter'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default EnhancedFooter
=======
export default EnhancedFooter;
'
>>>>>>> main
