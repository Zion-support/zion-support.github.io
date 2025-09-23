import React from 'react';
import Head from 'next/head';

export default function WhitepaperManagement() {
  return (
    <>
      <Head>
        <title>Whitepaper Management - Admin</title>
        <meta name="description" content="Manage whitepapers and documentation" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Whitepaper Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Published</h2>
            <p className="text-3xl font-bold text-blue-600">23</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Draft</h2>
            <p className="text-3xl font-bold text-yellow-600">8</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total Views</h2>
            <p className="text-3xl font-bold text-green-600">12.5K</p>
          </div>
        </div>
      </div>
    </>
  );
}