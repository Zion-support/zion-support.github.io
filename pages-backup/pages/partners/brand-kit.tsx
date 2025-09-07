<<<<<<< HEAD
export default function BrandKit() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Influencer Brand Kit</h1>
      <p>Download assets and messaging to promote Zion AI Marketplace.</p>
      <ul className="list-disc pl-6">
        <li><a className="text-blue-600 underline" href="/brand-kit.txt">Brand Kit (txt)</a></li>
      </ul>
      <div className="mt-4 p-4 rounded border">
        <h2 className="font-medium mb-2">Smart CTA</h2>
        <p>Invite your AI audience to earn & help them get hired.</p>
      </div>
    </div>
  )
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function brandkit() {
  return (
    <Layout>
      <Head>
        <title>Brand Kit - Zion Tech Group</title>
        <meta name="description" content="Brand Kit solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Brand Kit</h1>
          <p className="text-lg text-gray-600">
            Professional brand kit solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}