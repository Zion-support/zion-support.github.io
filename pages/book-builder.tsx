<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false })

export default function BookBuilderPage() {
  return <BookBuilder />
}
=======
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),
export default function BookBuilderPage() {
  return <BookBuilder />
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import dynamic from 'next / dynamic',
const BookBuilder = dynamic (() => import ('../components / book / BookBuilder'), { ssr: false }),
export default /**
 * BookBuilderPage - Function description
 */
function BookBuilderPage() {
  return <BookBuilder />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
