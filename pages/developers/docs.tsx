<<<<<<< HEAD
import dynamic from 'next/dynamic',;
;
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr:false }),;
;
export default function DocsRoute() {;
  return <ApiDocsPage />,;
=======
import dynamic from 'next/dynamic',
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),

export default function DocsRoute() {
  return <ApiDocsPage />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}