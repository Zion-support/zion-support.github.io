<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-expect-error - JSON import
import data from '../../data/innovation-radar.json';

export default function InnovationRadarPage() {
  const items: any[] = (data?.items || []).slice(0, 50);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Innovation Radar</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Signals generated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.source} · {it.author || 'unknown'} · {new Date(it.created_at).toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Query: {it.query}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  );
}
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function innovationradar() {
  return (
    <Layout>
      <Head>
        <title>Innovation Radar - Zion Tech Group</title>
        <meta name="description" content="Innovation Radar solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Innovation Radar</h1>
          <p className="text-lg text-gray-600">
            Professional innovation radar solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
