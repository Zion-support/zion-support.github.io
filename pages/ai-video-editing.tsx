import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function AIVideoEditing() {
  return (
    <Layout>
      <Head>
        <title>AI Video Editing - Zion Tech Group</title>
        <meta name="description" content="AI-powered video editing solutions for automated content creation." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Video Editing</h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered video editing solutions for automated content creation.
          </p>
        </div>
      </div>
    </Layout>
  );
}