import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function DeveloperPage() {
=======
import Layout from '../components/layout/Layout';

export default function developer() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <Layout>
      <Head>
        <title>Developer - Zion Tech Group</title>
        <meta name="description" content="Developer solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Developer</h1>
          <p className="text-lg text-gray-600">
            Professional developer solutions tailored to your business needs.
          </p>
        </div>
      </div>
<<<<<<< HEAD
      </div>
    </>
  )
=======
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}