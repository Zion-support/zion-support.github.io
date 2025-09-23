import dynamic from 'next/dynamic';

<<<<<<< HEAD
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'){ ssr: false });
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false });
>>>>>>> origin/auto/autonomy-17186719616

export default function GlobalEventRoute() {
  return <ExpoPage />;
}
