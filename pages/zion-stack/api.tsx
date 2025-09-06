import dynamic from 'next/dynamic'
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr: false }),

export default function ZionStackApiRoute() {
  return <ApiDocsPage />
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
