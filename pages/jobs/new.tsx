<<<<<<< HEAD
import { useState } from 'react';
import EnhancedCard from '../../components/ui/EnhancedCard';
import EnhancedButton from '../../components/ui/EnhancedButton';
import EnhancedLoading from '../../components/ui/EnhancedLoading';
import { useToast } from '../../components/ui/NotificationSystem';
export default function NewJobPage() {
  const { notify } = useToast($2);
  const [loading, setLoading] = useState($2);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault($2);
    setLoading($2);
    setTimeout(() => {
      setLoading($2);
      notify('Job posted! Invite talent to get responses.success')
    }, 800)
  },

  return (
    <div className="max-w-2xl mx-auto">
      <EnhancedCard>
        <h1 className="text-lg font-semibold mb-3">Post a Job</h1>
        {loading ? (
          <EnhancedLoading lines={6} />
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Job title" required />
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" placeholder="Location (Remote)" />
            <textarea className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm" rows={5} placeholder="Job description" />
            <EnhancedButton type="submit" variant="primary">Publish</EnhancedButton>
          </form>
        )}
      </EnhancedCard>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function JobsNew() {
  return (
    <Layout>
      <Head>
        <title>New Job - Zion Tech Group</title>
        <meta name="description" content="New Job solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">New Job</h1>
          <p className="text-lg text-gray-600">
            Professional new job solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}