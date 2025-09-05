<<<<<<< HEAD
import dynamic from 'next/dynamic',
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false }),

export default function ExpoRoute() {
  return <ExpoPage />
}
=======
import dynamic from 'next/dynamic';

const _ExpoPage = dynamic__(() => import('../components/expo/ExpoPage'), {_ssr: false});

export default function ExpoRoute() {_return <ExpoPage />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
