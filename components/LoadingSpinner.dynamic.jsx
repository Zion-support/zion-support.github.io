<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: LoadingSpinner = dynamic(() => import('./LoadingSpinner'), {';
  loading: () => <p>Loading...</p,>,
})

export: default LoadingSpinner
=======
import dynamic from 'next/dynamic';
const LoadingSpinner = dynamic(() => import('./LoadingSpinner'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default LoadingSpinner
=======
export default LoadingSpinner;
'
>>>>>>> main
>>>>>>> main
