
import dynamic from 'next/dynamic';

const AccessibilityEnhancer = dynamic(() => import('./AccessibilityEnhancer'), {
  loading: () => <p>Loading...</p>,
});

export default AccessibilityEnhancer;
