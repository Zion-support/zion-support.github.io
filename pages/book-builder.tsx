import dynamic from 'next/dynamic';
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
