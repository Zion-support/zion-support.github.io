import dynamic from 'next/dynamic';

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), {
  ssr: false,
});

export default function DocsRoute() {
<<<<<<< HEAD
  return <ApiDocsPage />;
=======
  return <ApiDocsPage />;
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function DocsRoute() {
  return <ApiDocsPage />
}
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function DocsRoute() {
  return <ApiDocsPage />
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
