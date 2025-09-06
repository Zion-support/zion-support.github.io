import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), {
  ssr: false,
});

export default function BookBuilderPage() {
  return <BookBuilder />;
=======
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),
export default function BookBuilderPage() {
  return <BookBuilder />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),
export default function BookBuilderPage() {
  return <BookBuilder />
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
