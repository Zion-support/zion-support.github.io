import dynamic from 'next/dynamic';
=======
const ExpoPage = dynamic(() => import('../../components/expo/ExpoPage'), { ssr: false }),
export default function GlobalEventRoute() {
  return <ExpoPage />,
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
