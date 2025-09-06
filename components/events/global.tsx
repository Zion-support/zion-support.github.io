import dynamic from 'next/dynamic';

<<<<<<< HEAD
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), {
  ssr: false
});

export default function GlobalEventRoute() {
  return <ExpoPage />;const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false })
export default function GlobalEventRoute() {
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), {;
  ssr: false,;
});

export default function GlobalEventRoute() {;
  return <ExpoPage />;const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false }),;
export default function GlobalEventRoute() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return <ExpoPage />;
}