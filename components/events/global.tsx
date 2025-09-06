import dynamic from 'next/dynamic';

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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
