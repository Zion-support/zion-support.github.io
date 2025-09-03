import dynamic from 'next/dynamic';
const AccessibilityManager = dynamic(() => import('./AccessibilityManager'), {
  loading: () => <p>Loading...</p>,
});
export default AccessibilityManager;
'