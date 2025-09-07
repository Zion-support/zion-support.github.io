<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
  const items: any[] = (data?.items || []).slice(0, 100);
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore - JSON import import data from '../../data/global-bounties.json',
export default function GlobalBountiesPage() {
  const items: any[] = (data?.items || []).slice($2);
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Global Bounties</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <ul className="mt-6 space-y-4">
          {items.map((it, idx) => (
            <li key={idx} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <a href={it.url} target="_blank" rel="noreferrer" className="font-medium underline">
                {it.title}
              </a>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {it.repo} · {it.language} · {new Date(it.created_at).toLocaleString()}
              </div>
<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels |[]).join(', ')}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Labels: {(it.labels || []).join(', ')}</div>
            </li>
          ))}
        </ul>
      </div>
    </EnhancedLayout>
  )
<<<<<<< HEAD:pages_backup/automation/global-bounties.tsx
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function globalbounties() {
  return (
    <Layout>
      <Head>
        <title>Global Bounties - Zion Tech Group</title>
        <meta name="description" content="Global Bounties solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Global Bounties</h1>
          <p className="text-lg text-gray-600">
            Professional global bounties solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
