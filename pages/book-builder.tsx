import dynamic from 'next/dynamic';
<<<<<<< HEAD

const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false })

export default function BookBuilderPage() {
  return <BookBuilder />
=======
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false });
export default function BookBuilderPage(req, res) {
  try {
  return <BookBuilder />;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}