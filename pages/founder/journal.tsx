<<<<<<< HEAD
import dynamic from 'next/dynamic',
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),

export default function FounderJournalPage() {
  return <BookBuilder />
}
=======
import dynamic from 'next/dynamic';
const _BookBuilder = dynamic__(() => import('../../components/book/BookBuilder'), {_ssr: false});

export default function FounderJournalPage() {_return <BookBuilder />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
