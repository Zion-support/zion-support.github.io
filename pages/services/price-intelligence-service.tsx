<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const PriceIntelligenceService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PriceIntelligenceService - Zion Tech Solutions</title>
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
 <div> <Head> <title>PriceIntelligenceService - Zion Tech Solutions</title> <meta name="description" content="PriceIntelligenceService service" /> </Head> <main className="space-y-4" > <h1>PriceIntelligenceService</h1> <p>Service details coming soon...</p> <UseTokensButton serviceId="price-intelligence" /> <Link href="/services" >Back to Services</Link> </main> </div> export default PriceIntelligenceService;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
