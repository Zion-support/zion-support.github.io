import dynamic from 'next/dynamic';

const _ApiDocsPage = dynamic__(() => import('../../components/docs/ApiDocsPage'), {_ssr: false});

export default function ZionStackApiRoute() {_return <ApiDocsPage />;}