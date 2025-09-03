import dynamic from 'next/dynamic';
const InteractiveElements = dynamic(() => import('./InteractiveElements'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default InteractiveElements
=======
export default InteractiveElements;
'
>>>>>>> main
