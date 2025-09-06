import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';
<<<<<<< HEAD
<<<<<<< HEAD
const PriceIntelligenceService: NextPage;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const PriceIntelligenceService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PriceIntelligenceService - Zion Tech Solutions</title>
<<<<<<< HEAD
        <meta name="description" content="PriceIntelligenceService service" />
      </Head>
      <main className="space-y-4">
        <h1>PriceIntelligenceService</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="price-intelligence" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  )
}
export default PriceIntelligenceService;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
        <meta name='description' content='PriceIntelligenceService service' />
      </Head>

      <main className='space-y-4'>
        <h1>PriceIntelligenceService</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId='price-intelligence' />
        <Link href='/services'>Back to Services</Link>
      </main>
    </div>
  );
};
}

export default PriceIntelligenceService;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
