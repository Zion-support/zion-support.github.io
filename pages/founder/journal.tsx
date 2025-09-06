<<<<<<< HEAD
import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const BookBuilder = null;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), { ssr: false })

export default function FounderJournalPage() {
  return <BookBuilder />
<<<<<<< HEAD
}
=======
const BookBuilder = dynamic(() => import('../../components/book/BookBuilder'), {
  ssr: false,
});
}

export default function FounderJournalPage() {
  return <BookBuilder />;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
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
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
