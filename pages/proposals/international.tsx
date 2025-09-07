<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
type ProposalListItem = $2;
  title: string,
  targetInstitution: string,
  regionalScope: string,
  type: string,
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted',
  createdAt: string},

export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([]),
  const [filter, setFilter] = useState($2);
  useEffect(() => {
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]))
  }, []),

  const filtered = $2;
  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">International Proposals</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Filter by region:</span>
          <select className="border rounded px-2 py-1" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Global</option>
            <option>Africa</option>
            <option>LATAM</option>
            <option>APAC</option>
            <option>EU</option>
          </select>
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function international() {
  return (
    <Layout>
      <Head>
        <title>International - Zion Tech Group</title>
        <meta name="description" content="International solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">International</h1>
          <p className="text-lg text-gray-600">
            Professional international solutions tailored to your business needs.
          </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        </div>
      </div>
<<<<<<< HEAD
    </EnhancedLayout>
  )
=======
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}