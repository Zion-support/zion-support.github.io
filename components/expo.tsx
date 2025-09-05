<<<<<<< HEAD
import dynamic from 'next/dynamic',;
;
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr:false }),;
;
export default function ExpoRoute() {;
  return <ExpoPage />,;
}
=======
import dynamic from 'next/dynamic',
const ExpoPage = dynamic(() => import('../components/expo/ExpoPage'), { ssr: false }),

export default function ExpoRoute() {
  return <ExpoPage />
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
