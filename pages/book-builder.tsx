<<<<<<< HEAD
import dynamic from 'next/dynamic';
const BookBuilder = dynamic(() => import('../components/book/BookBuilder'), { ssr: false}),

export default function BookBuilderPage() {
  return <BookBuilder />
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function bookbuilder() {
  return (
    <Layout>
      <Head>
        <title>Book Builder - Zion Tech Group</title>
        <meta name="description" content="Book Builder solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Book Builder</h1>
          <p className="text-lg text-gray-600">
            Professional book builder solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}