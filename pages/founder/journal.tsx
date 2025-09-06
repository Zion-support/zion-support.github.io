import dynamic from 'next/dynamic';


export default function FounderJournalPage() {
  return <BookBuilder />
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),

export default function FounderJournalPage() {
  return <BookBuilder />;
};
import dynamic from 'next/dynamic';
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false });
export default function FounderJournalPage(req, res) {
  try {
  return <BookBuilder />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
