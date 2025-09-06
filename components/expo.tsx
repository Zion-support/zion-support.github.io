import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD

const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), {
  ssr: false,
});

export default function ExpoRoute() {
  return <ExpoPage />;
=======
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false }),
export default function ExpoRoute() {
  return <ExpoPage />;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false }),
export default function ExpoRoute() {
  return <ExpoPage />;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
