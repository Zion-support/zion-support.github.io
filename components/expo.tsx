<<<<<<< HEAD
import dynamic from 'next/dynamic';

const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), {
  ssr: false,
});

export default function ExpoRoute() {
  return <ExpoPage />;
}
=======
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
