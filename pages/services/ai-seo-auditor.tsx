import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../../components/seo/Seo';
import { FAQPageJsonLd } from 'next-seo';

const AiSeoAuditor: NextPage = () => {
  const title = 'AiSeoAuditor - Zion Tech Solutions';
  const desc = 'AiSeoAuditor service';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Seo title="AI SEO Auditor" description="Automated SEO audits and recommendations powered by AI." openGraph={{ title: 'AI SEO Auditor', description: 'Automated SEO audits and recommendations powered by AI.' }} />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'What does the AI SEO Auditor analyze?',
            acceptedAnswerText: 'It scans metadata, headings, performance, accessibility, and content structure to highlight SEO opportunities.'
          },
          {
            questionName: 'How fast are the recommendations generated?',
            acceptedAnswerText: 'Typically within seconds for single pages and a few minutes for larger sites.'
          }
        ]}
      />
      <main>
        <h1>AI SEO Auditor</h1>
        <p>Service details coming soon...</p>
        <ShareBar title="AiSeoAuditor" summary={desc} imageUrl={ogImage} />
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default AiSeoAuditor;