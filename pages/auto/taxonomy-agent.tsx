import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
const TaxonomyAgent: NextPage = () => {
  return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    <div>
      <Head>
        <title>AI Taxonomy Tagger Agent</title>
        <meta name=&quot;description&quot; content=&quot;Daily AI-generated page tags.&quot; />
      </Head>
      <main className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>AI Taxonomy Tagger Agent</h1>
        <p>Suggests topic tags for each page to improve discovery and navigation.</p>
        <Link href=&quot;/data/reports/taxonomy/latest.json&quot;><a className=&quot;text-blue-600 underline&quot;>Latest Taxonomy Report (JSON)</Link></Link>
      </main>
    </div>
  )
},
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default TaxonomyAgent