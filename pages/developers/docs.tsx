import dynamic from 'next/dynamic';
<<<<<<< HEAD

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), {
  ssr: false,
});

export default function DocsRoute() {
  return <ApiDocsPage />;
=======
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function DocsRoute() {
  return <ApiDocsPage />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
