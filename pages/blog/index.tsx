import type { NextPage } from 'next';
import Link from 'next/link';
import Seo from '../../components/seo/Seo';

const Index: NextPage = () => {
  const title = 'Blog - Zion Tech Solutions';
  const desc = 'Latest insights from Zion';
  const ogImage = '/og/default.svg';
  return (
    <div>
      <Seo title="Blog" description="Insights on AI, DevOps, and engineering from Zion." openGraph={{ title: 'Blog', description: 'Insights on AI, DevOps, and engineering from Zion.' }} />
      <main>
        <h1>Blog</h1>
        <p>Blog content coming soon...</p>
        <ShareBar title="Blog" summary={desc} imageUrl={ogImage} />
        <Link href="/blog"><a>Back to Blog</a></Link>
      </main>
    </div>
  );
}