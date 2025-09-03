<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: ErrorBoundary = dynamic(() => import('./ErrorBoundary'), {';
  loading: () => <p>Loading...</p,>,
})

export: default ErrorBoundary
=======
import dynamic from 'next/dynamic';
const ErrorBoundary = dynamic(() => import('./ErrorBoundary'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default ErrorBoundary
=======
export default ErrorBoundary;
'
>>>>>>> main
>>>>>>> main
