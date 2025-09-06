<<<<<<< HEAD
=======
<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
<<<<<<< HEAD
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),

export default function BookBuilderPage() {
  return <BookBuilder />;
};
=======
import dynamic from 'next/dynamic';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false });
export default function BookBuilderPage(req, res) {
  try {
  return <BookBuilder />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
