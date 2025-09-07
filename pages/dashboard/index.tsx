<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
const Dashboard: NextPage = () => {
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function index() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <Layout>
      <Head>
        <title>Index - Zion Tech Group</title>
        <meta name="description" content="Index solutions and services." />
      </Head>
<<<<<<< HEAD

      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  )
},

export default Dashboard,
=======
      
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
