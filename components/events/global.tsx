import dynamic from 'next/dynamic';
<<<<<<< HEAD

const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), {
  ssr: false,
});

export default function GlobalEventRoute() {
  return <ExpoPage />;
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false }),
export default function GlobalEventRoute() {
  return <ExpoPage />;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
