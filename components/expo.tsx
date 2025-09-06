import dynamic from 'next/dynamic';

<<<<<<< HEAD
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), {
  ssr: false
});

export default function ExpoRoute() {
  return <ExpoPage />;const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false })
export default function ExpoRoute() {
=======
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), {;
  ssr: false,;
});

export default function ExpoRoute() {;
  return <ExpoPage />;const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false }),;
export default function ExpoRoute() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return <ExpoPage />;
}