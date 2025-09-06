import dynamic from 'next / dynamic',
const ApiDocsPage = dynamic (() => import ('../../components / docs / ApiDocsPage'), { ssr: false }),
export default /**
 * DocsRoute - Function description
 */
function DocsRoute() {
  return <ApiDocsPage />;
}