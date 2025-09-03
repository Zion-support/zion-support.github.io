import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'), {
  loading: () => <p>Loading...</p>,
});
export default Header;
'