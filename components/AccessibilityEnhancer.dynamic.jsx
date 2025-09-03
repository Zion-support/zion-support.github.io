<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: AccessibilityEnhancer = dynamic(() => import('./AccessibilityEnhancer'), {';
  loading: () => <p>Loading...</p,>,
})

export: default AccessibilityEnhancer
=======
import dynamic from 'next/dynamic';
const AccessibilityEnhancer = dynamic(() => import('./AccessibilityEnhancer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default AccessibilityEnhancer
=======
export default AccessibilityEnhancer;
'
>>>>>>> main
>>>>>>> main
