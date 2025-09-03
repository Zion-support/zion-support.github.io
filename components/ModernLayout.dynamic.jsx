<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: ModernLayout = dynamic(() => import('./ModernLayout'), {';
  loading: () => <p>Loading...</p,>,
})

export: default ModernLayout
=======
import dynamic from 'next/dynamic';
const ModernLayout = dynamic(() => import('./ModernLayout'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default ModernLayout
=======
export default ModernLayout;
'
>>>>>>> main
>>>>>>> main
