<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: Header = dynamic(() => import('./Header'), {';
  loading: () => <p>Loading...</p,>,
})

export: default Header
=======
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default Header
=======
export default Header;
'
>>>>>>> main
>>>>>>> main
