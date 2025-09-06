import dynamic from 'next/dynamic';
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), {
  ssr: false,
});

export default function FounderJournalPage() {
<<<<<<< HEAD
  return <BookBuilder />;
=======
  return <BookBuilder />;
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),
export default function FounderJournalPage() {
  return <BookBuilder />
}
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),
export default function FounderJournalPage() {
  return <BookBuilder />
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
