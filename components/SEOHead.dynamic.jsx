import dynamic from 'next/dynamic';
const SEOHead = dynamic(() => import('./SEOHead'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default SEOHead
=======
export default SEOHead;
'
>>>>>>> main
