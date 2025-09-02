
import dynamic from 'next/dynamic';

const LoadingSpinner = dynamic(() => import('./LoadingSpinner'), {
  loading: () => <p>Loading...</p>,
})

export default LoadingSpinner
