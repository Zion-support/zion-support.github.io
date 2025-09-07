<<<<<<< HEAD
import EnhancedLayout from '../../components/layout/EnhancedLayout';
// @ts-ignore
import data from '../../data/github-pulse.json';
export default function GithubPulsePage() {
  const repo = $2;
  const last24h = $2;
  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold">GitHub Pulse</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Updated at {data?.generatedAt || '—'}</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <Metric label="Stars" value={repo.stargazers_count} />
          <Metric label="Forks" value={repo.forks} />
          <Metric label="Open Issues" value={repo.open_issues} />
          <Metric label="Watchers" value={repo.watchers} />
          <Metric label="Issues updated (24h)" value={last24h.issues_updated} />
          <Metric label="PRs updated (24h)" value={last24h.prs_updated} />
        </div>
      </div>
    </EnhancedLayout>
  )
}

function Metric({ label, value }: { label: string, value: any}) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value ?? '—'}</div>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function githubpulse() {
  return (
    <Layout>
      <Head>
        <title>Github Pulse - Zion Tech Group</title>
        <meta name="description" content="Github Pulse solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Github Pulse</h1>
          <p className="text-lg text-gray-600">
            Professional github pulse solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}