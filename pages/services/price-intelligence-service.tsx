<<<<<<< HEAD
import type { NextPage } from 'next',;
import Head from 'next/head',;
import Link from 'next/link',;
import UseTokensButton from '../../components/tokens/UseTokensButton',;
;
const PriceIntelligenceService:NextPage = () => {;
  return (;
    <div>;
      <Head>;
        <title>PriceIntelligenceService - Zion Tech Solutions</title>;
        <meta name="description" content="PriceIntelligenceService service" />;
      </Head>;
      ;
      <main className="space-y-4">;
        <h1>PriceIntelligenceService</h1>;
        <p>Service details coming soon...</p>;
        <UseTokensButton serviceId="price-intelligence" />;
        <Link href="/services">Back to Services</Link>;
      </main>;
    </div>;
  );
},;
;
=======
import type { NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
import UseTokensButton from '../../components/tokens/UseTokensButton',
const PriceIntelligenceService: NextPage = () => {
  return (    <div>
      <Head>
        <title>PriceIntelligenceService - Zion Tech Solutions</title>
        <meta name=&quot;description&quot; content=&quot;PriceIntelligenceService service&quot; />
      </Head>
      
      <main className=&quot;space-y-4&quot;>
        <h1>PriceIntelligenceService</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId=&quot;price-intelligence&quot; />
        <Link href=&quot;/services&quot;>Back to Services</Link>
      </main>
    </div>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default PriceIntelligenceService,