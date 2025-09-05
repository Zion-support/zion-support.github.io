import React from 'react';
import Head from 'next/head';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI, IT, and Micro SaaS services." />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Pricing</h1>
        <p className="text-gray-700">Contact us for a customized quote that fits your business needs.</p>
      </main>
    </div>
  );
}