<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
const ResetPassword: NextPage = $2;
export default ResetPassword,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function ResetPassword() {
  return (
    <Layout>
      <Head>
        <title>Reset Password - Zion Tech Group</title>
        <meta name="description" content="Reset password page." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Reset Password</h1>
          <p className="text-lg text-gray-600">
            Reset password functionality coming soon.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
