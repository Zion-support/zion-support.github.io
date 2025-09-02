
import dynamic from 'next/dynamic';

const OptimizedImage = dynamic(() => import('./OptimizedImage'), {
  loading: () => <p>Loading...</p>,
})

export default OptimizedImage
