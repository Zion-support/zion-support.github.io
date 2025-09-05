<<<<<<< HEAD
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr:false }),;
;
export default function FounderJournalPage() {;
  return <BookBuilder />,;
=======
import dynamic from 'next/dynamic',
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),

export default function FounderJournalPage() {
  return <BookBuilder />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}