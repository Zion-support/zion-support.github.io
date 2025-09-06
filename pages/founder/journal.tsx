<<<<<<< HEAD

<<<<<<< HEAD
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false });
export default function FounderJournalPage(req, res) {
  try {
  return <BookBuilder />;
=======
<<<<<<< HEAD
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),
export default function FounderJournalPage() {
  return <BookBuilder />
}
import dynamic from 'next / dynamic',
const BookBuilder = dynamic (() => import ('../../components / book / BookBuilder'), { ssr: false }),
export default /**
 * FounderJournalPage - Function description
 */
function FounderJournalPage() {
  return <BookBuilder />;
}

=======
<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD

const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false })

export default function FounderJournalPage() {
  return <BookBuilder />
=======
=======
<<<<<<< HEAD
import dynamic from 'next/dynamic',;
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false }),

export default function FounderJournalPage() {
  return <BookBuilder />;
};
=======
import dynamic from 'next/dynamic';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false });
export default function FounderJournalPage(req, res) {
  try {
  return <BookBuilder />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
