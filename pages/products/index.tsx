<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index page" />
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  )
},

export default Index,
=======
import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Products - Zion Tech Group"
      description="Our products and solutions"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Products</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
