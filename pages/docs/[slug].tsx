import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

type DocPageProps = {
  title: string;
  content: string;
};

export default function DocPage({ title, content }: DocPageProps) {
  return (
    <>
      <Head>
        <title>{title} | Zion Tech Group Docs</title>
        <meta name="description" content={`${title} - Documentation`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
            <span className="mx-2 text-white/40">/</span>
            <Link href="/docs" className="text-cyan-400 hover:text-cyan-300 transition-colors">Docs</Link>
          </nav>
          <article className="prose prose-invert max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{title}</h1>
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Documentation Coming Soon</h2>
              <p className="text-white/80 mb-4">
                We're currently developing comprehensive documentation for our services and solutions.
              </p>
              <p className="text-white/60 mb-6">
                In the meantime, please contact us for any technical questions or support needs.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-1 text-sm">
                  <p>📞 <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a></p>
                  <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a></p>
                  <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // For now, return empty paths since we don't have documentation
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  
  // Return a simple documentation page
  const title = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  const content = `Documentation for ${title}`;

  return {
    props: { title, content }
  };
}

