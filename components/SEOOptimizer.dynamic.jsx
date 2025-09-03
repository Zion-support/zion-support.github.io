import dynamic from 'next/dynamic';
const SEOOptimizer = dynamic(() => import('./SEOOptimizer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default SEOOptimizer
=======
export default SEOOptimizer;
'
>>>>>>> main
