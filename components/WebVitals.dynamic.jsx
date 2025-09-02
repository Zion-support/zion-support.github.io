import dynamic from 'next/dynamic';

const WebVitals = dynamic(() => import('./WebVitals'), {
  loading: () => <p>Loading...</p>,
});

export default WebVitals;
