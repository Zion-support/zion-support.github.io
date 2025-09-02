
import dynamic from 'next/dynamic';

const PWARegistration = dynamic(() => import('./PWARegistration'), {
  loading: () => <p>Loading...</p>,
})

export default PWARegistration
