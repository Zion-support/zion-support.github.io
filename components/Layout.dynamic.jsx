import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('./Layout'), {
  loading: () => <p>Loading...</p>,
});
export default Layout;
'