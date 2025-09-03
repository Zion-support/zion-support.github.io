<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: EnhancedSEO = dynamic(() => import('./EnhancedSEO'), {';
  loading: () => <p>Loading...</p,>,
})

export: default EnhancedSEO
=======
import dynamic from 'next/dynamic';
const EnhancedSEO = dynamic(() => import('./EnhancedSEO'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default EnhancedSEO
=======
export default EnhancedSEO;
'
>>>>>>> main
>>>>>>> main
