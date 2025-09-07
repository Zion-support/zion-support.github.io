<<<<<<< HEAD
export default function LocalHome(){return (<main className="min-h-screen bg-black text-zinc-100 p-8"><section className="prose prose-invert max-w-3xl mx-auto"><h1>Zion</h1><p>Fides, probata.</p><p>Sovereignitas est protocollum.</p></section></main>)}
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function LaIndex() {
  return (
    <Layout>
      <Head>
        <title>LA - Zion Tech Group</title>
        <meta name="description" content="LA solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">LA</h1>
          <p className="text-lg text-gray-600">
            Professional LA solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
