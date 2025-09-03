<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: SecurityHeaders = dynamic(() => import('./SecurityHeaders'), {';
  loading: () => <p>Loading...</p,>,
})

export: default SecurityHeaders
=======
import dynamic from 'next/dynamic';
const SecurityHeaders = dynamic(() => import('./SecurityHeaders'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default SecurityHeaders
=======
export default SecurityHeaders;
'
>>>>>>> main
>>>>>>> main
