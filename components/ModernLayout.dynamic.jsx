
import dynamic from 'next/dynamic';

const ModernLayout = dynamic(() => import('./ModernLayout'), {
  loading: () => <p>Loading...</p>,
})

export default ModernLayout
