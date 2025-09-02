import dynamic from 'next/dynamic';
const EnhancedNavigation = dynamic(() => import('./EnhancedNavigation'), {
  loading: () => <p>Loading...</p>,
});
export default EnhancedNavigation;
