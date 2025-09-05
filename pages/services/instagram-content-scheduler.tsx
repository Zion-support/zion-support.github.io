import type { NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
import UseTokensButton from '../../components/tokens/UseTokensButton',
const InstagramContentScheduler: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstagramContentScheduler - Zion Tech Solutions</title>
        <meta name=&quot;description&quot; content=&quot;InstagramContentScheduler service&quot; />
      </Head>
      
      <main className=&quot;space-y-4&quot;>
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId=&quot;instagram-content-scheduler&quot; />
        <Link href=&quot;/services&quot;>Back to Services</Link>
      </main>
    </div>
  )
},

export default InstagramContentScheduler,