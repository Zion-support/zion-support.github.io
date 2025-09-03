<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: SEOEnhancer = dynamic(() => import('./SEOEnhancer'), {';
  loading: () => <p>Loading...</p,>,
})

export: default SEOEnhancer
=======
import dynamic from 'next/dynamic';
const SEOEnhancer = dynamic(() => import('./SEOEnhancer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default SEOEnhancer
=======
export default SEOEnhancer;
'
>>>>>>> main
>>>>>>> main
