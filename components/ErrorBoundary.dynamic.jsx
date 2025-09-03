import dynamic from 'next/dynamic';
const ErrorBoundary = dynamic(() => import('./ErrorBoundary'), {
  loading: () => <p>Loading...</p>,
});

export default ErrorBoundary;
'