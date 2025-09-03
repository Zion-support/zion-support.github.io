<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: MainSidebar = dynamic(() => import('./MainSidebar'), {';
  loading: () => <p>Loading...</p,>,
})

export: default MainSidebar
=======
import dynamic from 'next/dynamic';
const MainSidebar = dynamic(() => import('./MainSidebar'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default MainSidebar
=======
export default MainSidebar;
'
>>>>>>> main
>>>>>>> main
