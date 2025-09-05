<<<<<<< HEAD
import dynamic from 'next/dynamic',
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),

export default function DocsRoute() {
  return <ApiDocsPage />
}
=======
import dynamic from 'next/dynamic';

const _ApiDocsPage = dynamic__(() => import('../../components/docs/ApiDocsPage'), {_ssr: false});

export default function DocsRoute() {_return <ApiDocsPage />;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
