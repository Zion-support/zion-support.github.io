import dynamic from 'next/dynamic',;
;
const ApiDocsPage = dynamic(() => import('../../components/docs/ApiDocsPage'), { ssr:false }),;
;
export default function DocsRoute() {;
  return <ApiDocsPage />,;}
import React from 'react';
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-8">
      <section className="prose prose-invert max-w-3xl mx-auto">
        <h1>developers docs</h1>
        <p>Auto-healed placeholder. Replace with real content.</p>
      </section>
    </main>
  );
}
