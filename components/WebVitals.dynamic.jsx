<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: WebVitals = dynamic(() => import('./WebVitals'), {';
  loading: () => <p>Loading...</p,>,
})

export: default WebVitals
=======
import dynamic from 'next/dynamic';
const WebVitals = dynamic(() => import('./WebVitals'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default WebVitals
=======
export default WebVitals;
'
>>>>>>> main
>>>>>>> main
