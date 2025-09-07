<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
const Messages: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Messages - Zion</title>
      </Head>

      <h1 className="text-2xl font-semibold">Messages</h1>

      <EmptyState
        title="No messages yet"
        description="Start a conversation by requesting a quote or responding to an existing one."
        icon={<span>📫</span>}
        primaryAction={{ label: 'Explore talent', href: '/talent' }}
        secondaryAction={{ label: 'Browse services', href: '/services' }}
      />
    </div>
  )
},

export default Messages,
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
