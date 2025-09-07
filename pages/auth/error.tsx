import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function AuthErrorPage() {
  return (
    <Layout>
      <Head>
        <title>Authentication Error - Zion Tech Group</title>
        <meta name="description" content="Authentication error page." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Authentication Error</h1>
          <p className="text-lg text-gray-600">
            There was an error with authentication. Please try again.
          </p>
        </div>
      </div>
    </Layout>
  );
}