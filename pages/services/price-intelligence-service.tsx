import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const PriceIntelligenceService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PriceIntelligenceService - Zion Tech Solutions</title>
<<<<<<< HEAD
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

export default PriceIntelligenceService;
=======
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
};

export default PriceIntelligenceService;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
