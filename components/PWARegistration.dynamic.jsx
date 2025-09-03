<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: PWARegistration = dynamic(() => import('./PWARegistration'), {';
  loading: () => <p>Loading...</p,>,
})

export: default PWARegistration
=======
import dynamic from 'next/dynamic';
const PWARegistration = dynamic(() => import('./PWARegistration'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default PWARegistration
=======
export default PWARegistration;
'
>>>>>>> main
>>>>>>> main
