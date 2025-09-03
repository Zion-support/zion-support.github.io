import dynamic from 'next/dynamic';
const AccessibilityManager = dynamic(() => import('./AccessibilityManager'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default AccessibilityManager
=======
export default AccessibilityManager;
'
>>>>>>> main
