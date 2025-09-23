import dynamic from 'next/dynamic';

<<<<<<< HEAD
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'){ ssr: false });

export default function GlobalEventRoute() {
  return <ExpoPage />;
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
