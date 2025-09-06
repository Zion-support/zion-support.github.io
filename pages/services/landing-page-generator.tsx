import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';
<<<<<<< HEAD
<<<<<<< HEAD
const LandingPageGenerator: NextPage;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const LandingPageGenerator: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandingPageGenerator - Zion Tech Solutions</title>
<<<<<<< HEAD
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
}
export default LandingPageGenerator;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
        <meta name='description' content='LandingPageGenerator service' />
      </Head>

      <main className='space-y-4'>
        <h1>LandingPageGenerator</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId='landing-page-generator' />
        <Link href='/services'>Back to Services</Link>
      </main>
    </div>
  );
};
}

export default LandingPageGenerator;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
