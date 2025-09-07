<<<<<<< HEAD
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
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
