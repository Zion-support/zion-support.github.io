<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import dynamic from 'next/dynamic';

const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false })

export default function BookBuilderPage() {
  return <BookBuilder />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
