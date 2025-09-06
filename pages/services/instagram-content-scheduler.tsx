import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';
<<<<<<< HEAD
<<<<<<< HEAD
const InstagramContentScheduler: NextPage;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const InstagramContentScheduler: NextPage = () => {
  return (
    <div>
      <Head>
        <title>InstagramContentScheduler - Zion Tech Solutions</title>
<<<<<<< HEAD
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
}
export default InstagramContentScheduler;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
        <meta name='description' content='InstagramContentScheduler service' />
      </Head>

      <main className='space-y-4'>
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId='instagram-content-scheduler' />
        <Link href='/services'>Back to Services</Link>
      </main>
    </div>
  );
};
}

export default InstagramContentScheduler;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
