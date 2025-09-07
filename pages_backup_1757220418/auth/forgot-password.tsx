import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function ForgotPassword() {
  return (
    <Layout>
      <Head>
        <title>Forgot Password - Zion Tech Group</title>
        <meta name="description" content="Forgot password page." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Forgot Password</h1>
          <p className="text-lg text-gray-600">
            Reset your password functionality coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}