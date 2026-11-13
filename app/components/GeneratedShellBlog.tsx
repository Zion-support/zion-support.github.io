import type { GeneratedBlogData } from './generated-blog-data';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import PageShell from '@/components/PageShell';



export default function GeneratedShellBlog({ data }: { data: GeneratedBlogData }) {
  return (
    <PageShell title={data.values[0]} description={data.values[1]} canonical={data.values[2]} jsonLd={{
      '@context':'https://schema.org',
      '@type':'BlogPosting',
      headline: data.values[3],
      description: data.values[4],
      author: { '@type':'Organization', name: 'Zion Tech Group' },
      publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
      mainEntityOfPage: data.values[5]
    }}>
      <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <p>{data.values[6]}</p>
        <h2>What works</h2>
        <ul>
          <li>Start with low-risk, high-value workflows</li>
          <li>Use production data, not synthetic demos</li>
          <li>Create operator runbooks and escalation paths</li>
          <li>Review model behavior weekly</li>
        </ul>
        <h2>Outcome</h2>
        <p>{data.values[7]}</p>
        <p><Link href="/contact" className="text-purple-400 hover:underline">Talk to Zion Tech Group →</Link></p>
      </article>
    </PageShell>
  );
}
