import dynamic from 'next/dynamic';
const OptimizedImage = dynamic(() => import('./OptimizedImage'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default OptimizedImage
=======
export default OptimizedImage;
'
>>>>>>> main
