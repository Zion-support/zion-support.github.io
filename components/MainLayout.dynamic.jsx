<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: MainLayout = dynamic(() => import('./MainLayout'), {';
  loading: () => <p>Loading...</p,>,
})

export: default MainLayout
=======
import dynamic from 'next/dynamic';
const MainLayout = dynamic(() => import('./MainLayout'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default MainLayout
=======
export default MainLayout;
'
>>>>>>> main
>>>>>>> main
