import dynamic from 'next/dynamic';
const EnhancedFooter = dynamic(() => import('./EnhancedFooter'), {
  loading: () => <p>Loading...</p>,
});

export default EnhancedFooter;
'