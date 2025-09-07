<<<<<<< HEAD

import dynamic from 'next/dynamic';
const BookBuilder = null;

=======
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),;

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
import dynamic from 'next/dynamic';
const BookBuilder = null;
>>>>>>> origin/main
export default function BookBuilderPage() {
  return <BookBuilder />
origin/cursor/automate-test-improve-and-merge-code-2533
}
