import React from 'react',;
import Head from 'next/head',;
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',;
import Link from 'next/link',;
;
export default function DeveloperPage() {;
  return (;
    <>;
      <Head>;
        <title>Developer Portal | Zion Tech Group</title>;
        <meta name="description" content="Developer resources, API keys, examples, and SDKs." />;
        <link rel="canonical" href="https://ziontechgroup.com/developer" />;
      </Head>;
      <div className="container mx-auto px-4 py-16 text-gray-200">;
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Developer Portal</h1>;
        <p className="text-gray-300 mb-6">Access docs, SDKs, and quickstarts for all services. Contact us for enterprise onboarding.</p>;
              <div className="space-x-4">;
        <a href="/api-docs" className="text-cyan-400 underline">API Docs</a>;
        <a href="/docs" className="text-cyan-400 underline">Guides</a>;
        <a href="/support" className="text-cyan-400 underline">Support</a>;
      </div>;
      </div>;
    </>;
  ),;}
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>developer</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
}
