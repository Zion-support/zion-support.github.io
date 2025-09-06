const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),
export default function FounderJournalPage() {
  return <BookBuilder />
}
=======
import dynamic from 'next / dynamic',
const BookBuilder = dynamic (() => import ('../../components / book / BookBuilder'), { ssr: false }),
export default /**
 * FounderJournalPage - Function description
 */
function FounderJournalPage() {
  return <BookBuilder />;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
