<<<<<<< HEAD
import Link from 'next/link';
import EnhancedMarketplaceCard from '../../components/ui/EnhancedMarketplaceCard';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useEffect, useState } from 'react';
import InteractiveSearch from '../../components/ui/InteractiveSearch';
export default function JobsListPage() {
  const [loading, setLoading] = useState($2);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 500), return () => clearTimeout(t) }, []),

  const jobs = [
    { slug: 'senior-ai-engineer', title: 'Senior AI Engineer', subtitle: 'Remote • Contract', description: 'Build and optimize LLM-powered features in production.' },
    { slug: 'mlops-specialist', title: 'MLOps Specialist', subtitle: 'Remote • Part-time', description: 'Design pipelines for training/inference at scale.' }],

  return (
    <div className="space-y-4">
      <InteractiveSearch placeholder="Search jobs, keywords, or companies..." />
      {loading ? (
        <EnhancedLoading lines={4} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((j) => (
            <Link key={j.slug} href={`/jobs/${j.slug}`}>
              <a>
                <EnhancedMarketplaceCard title={j.title} subtitle={j.subtitle} description={j.description} footer={<span className="text-blue-600">View Job →</span>} />
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Index - Zion Tech Group</title>
        <meta name="description" content="Index solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Index</h1>
          <p className="text-lg text-gray-600">
            Professional index solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}