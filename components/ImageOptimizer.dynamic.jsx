<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: ImageOptimizer = dynamic(() => import('./ImageOptimizer'), {';
  loading: () => <p>Loading...</p,>,
})

export: default ImageOptimizer
=======
import dynamic from 'next/dynamic';
const ImageOptimizer = dynamic(() => import('./ImageOptimizer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default ImageOptimizer
=======
export default ImageOptimizer;
'
>>>>>>> main
>>>>>>> main
