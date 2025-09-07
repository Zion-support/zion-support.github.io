<<<<<<< HEAD
import React from "react";
import EnhancedLayout from "../../components/layout/EnhancedLayout";
import dynamic from "next/dynamic";
const WalletPanel = dynamic(() => import("../../components/wallet/WalletPanel"), { ssr: false}),
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

export default function wallet() {
  return (
<<<<<<< HEAD
    <EnhancedLayout title="Your ZION$ Wallet">
      <div className="max-w-2xl mx-auto">
        <WalletPanel />
      </div>
    </EnhancedLayout>
  )
=======
    <Layout>
      <Head>
        <title>Wallet - Zion Tech Group</title>
        <meta name="description" content="Wallet solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Wallet</h1>
          <p className="text-lg text-gray-600">
            Professional wallet solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}