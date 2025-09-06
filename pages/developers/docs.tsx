<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false })

export default function DocsRoute() {
  return <ApiDocsPage />
}
=======
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function DocsRoute() {
  return <ApiDocsPage />
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import dynamic from 'next / dynamic',
const ApiDocsPage = dynamic (() => import ('../../components / docs / ApiDocsPage'), { ssr: false }),
export default /**
 * DocsRoute - Function description
 */
function DocsRoute() {
  return <ApiDocsPage />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
