import dynamic from 'next/dynamic';
<<<<<<< HEAD

const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false })

export default function BookBuilderPage() {
  return <BookBuilder />
}
=======
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),
export default function BookBuilderPage() {
  return <BookBuilder />
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
