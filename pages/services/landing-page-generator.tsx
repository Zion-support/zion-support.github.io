import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const LandingPageGenerator: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandingPageGenerator - Zion Tech Solutions</title>
        <meta name="description" content="LandingPageGenerator service" />
      </Head>
      <main className="space-y-4">
        <h1>LandingPageGenerator</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="landing-page-generator" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  )
<<<<<<< HEAD
}
export default LandingPageGenerator;

=======
},
export default LandingPageGenerator,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
