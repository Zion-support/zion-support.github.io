
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

