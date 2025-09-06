import dynamic from 'next/dynamic'
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false }),

export default function BookBuilderPage() {
  return <BookBuilder />
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
