import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('./Layout'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default Layout
=======
export default Layout;
'
>>>>>>> main
