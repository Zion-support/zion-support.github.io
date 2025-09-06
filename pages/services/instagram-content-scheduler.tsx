import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const InstagramContentScheduler: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstagramContentScheduler - Zion Tech Solutions</title>
        <meta name="description" content="InstagramContentScheduler service" />
      </Head>
      <main className="space-y-4">
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="instagram-content-scheduler" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  )
<<<<<<< HEAD
}
export default InstagramContentScheduler;

=======
},
export default InstagramContentScheduler,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
