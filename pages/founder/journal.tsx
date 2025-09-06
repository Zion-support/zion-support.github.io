import dynamic from 'next/dynamic';
<<<<<<< HEAD
const BookBuilder = null;
=======
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function FounderJournalPage() {
  return <BookBuilder />
}