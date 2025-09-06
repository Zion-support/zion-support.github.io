import dynamic from 'next/dynamic';
<<<<<<< HEAD
<<<<<<< HEAD

const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), {
  ssr: false,
});

export default function ZionStackApiRoute() {
  return <ApiDocsPage />;
=======
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),
export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
