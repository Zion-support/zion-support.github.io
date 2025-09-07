import dynamic from 'next/dynamic';
<<<<<<< HEAD
const ApiDocsPage = null;
=======
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}