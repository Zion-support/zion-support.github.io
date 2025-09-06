import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import UseTokensButton from '../../components/tokens/UseTokensButton'
const LandingPageGenerator: NextPage = () => {
  return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    <div>
      <Head>
        <title>LandingPageGenerator - Zion Tech Solutions</title>
        <meta name=&quot;description&quot; content=&quot;LandingPageGenerator service&quot; />
      </Head>
      
      <main className=&quot;space-y-4&quot;>
        <h1>LandingPageGenerator</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId=&quot;landing-page-generator&quot; />
        <Link href=&quot;/services&quot;>Back to Services</Link>
      </main>
    </div>
  )
},
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default LandingPageGenerator