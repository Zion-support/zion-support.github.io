<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function reports() {
=======
import Link from 'next/link';
export default function Reports() {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <Layout>
      <Head>
        <title>Reports - Zion Tech Group</title>
        <meta name="description" content="Reports solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Reports</h1>
          <p className="text-lg text-gray-600">
            Professional reports solutions tailored to your business needs.
          </p>
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
  );
=======
    </div>
  )
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}