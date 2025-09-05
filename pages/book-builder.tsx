import dynamic from 'next/dynamic';
const _BookBuilder = dynamic__(() => import('../components/book/BookBuilder'), {_ssr: false});

export default function BookBuilderPage() {_return <BookBuilder />;}