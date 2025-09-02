import dynamic from 'next/dynamic';
const MainSidebar = dynamic(() => import('./MainSidebar'), {
  loading: () => <p>Loading...</p>,
});
export default MainSidebar;
