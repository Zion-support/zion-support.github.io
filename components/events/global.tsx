import dynamic from 'next/dynamic';

<<<<<<< HEAD
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false });
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'){ ssr: false });
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export default function GlobalEventRoute() {
  return <ExpoPage />;
}
