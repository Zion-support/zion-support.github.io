import type { NextPage } from 'next';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const AiSeoAuditor: NextPage = () => {
  const title = 'AiSeoAuditor - Zion Tech Solutions';
  const desc = 'AiSeoAuditor service';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Head>
        <title>AiSeoAuditor - Zion Tech Solutions</title>
        <meta name="description" content="AiSeoAuditor service" />
      </Head>
      
      <main className="space-y-4">
        <h1>AiSeoAuditor</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="ai-seo-auditor" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default AiSeoAuditor;