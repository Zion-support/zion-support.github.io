<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD
=======
<<<<<<< HEAD

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false })

export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import dynamic from 'next / dynamic',
const ApiDocsPage = dynamic (() => import ('../../components / docs / ApiDocsPage'), { ssr: false }),
export default /**
 * ZionStackApiRoute - Function description
 */
function ZionStackApiRoute() {
  return <ApiDocsPage />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
