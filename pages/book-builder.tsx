<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import dynamic from 'next/dynamic';

const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false })

export default function BookBuilderPage() {
  return <BookBuilder />
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),

export default function BookBuilderPage() {
  return <BookBuilder />;
};
import dynamic from 'next/dynamic';
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false });
export default function BookBuilderPage(req, res) {
  try {
  return <BookBuilder />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
