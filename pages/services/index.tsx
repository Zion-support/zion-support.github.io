import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../../components/seo/Seo';

const Index: NextPage = () => {
  return (
    <div>
      <Seo title="Services" description="AI/ML, Web, Mobile, DevOps, and Security services by Zion." openGraph={{ title: 'Services', description: 'AI/ML, Web, Mobile, DevOps, and Security services by Zion.' }} />
      <main>
        <h1>Services</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default Index;
