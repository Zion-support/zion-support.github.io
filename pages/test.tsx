<<<<<<< HEAD
import React from 'react'
import Head from 'next/head'
export default function TestPage() {
  return (
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    <>
      <Head>
        <title>Test Page | Zion Tech Group</title>
      </Head>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-cyan-400">Test Page Working</h1>
      </div>
    </>
  )
}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
=======
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function TestPage() {
  return (
    <MainLayout title="Test Page - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Test Page</h1>
        <p className="text-lg text-gray-700">
          This is a test page.
        </p>
      </div>
    </MainLayout>
  );
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
