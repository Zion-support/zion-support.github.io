import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
const MarketSignals: NextPage = () => {
  return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    <div>
      <Head>
        <title>AI Market Signals Agent</title>
        <meta name=&quot;description&quot; content=&quot;Daily curated AI market signals.&quot; />
      </Head>
      <main className=&quot;space-y-4&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>AI Market Signals Agent</h1>
        <p>Runs daily to curate relevant AI/tech market signals and trends and stores them in the repository.</p>
        <div className=&quot;space-y-2&quot;>
          <Link href=&quot;/data/reports/market-signals/latest.json&quot;><a className=&quot;text-blue-600 underline&quot;>Latest Report (JSON)</Link></Link>
        </div>
      </main>
    </div>
  )
},
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default MarketSignals