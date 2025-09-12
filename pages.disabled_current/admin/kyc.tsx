import React from 'react';
import Head from 'next/head';

export default function KycManagement() {
  return (
    <>
      <Head>
        <title>KYC Management - Admin</title>
        <meta name="description" content="Manage KYC verification processes" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">KYC Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Pending Reviews</h2>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Approved</h2>
            <p className="text-3xl font-bold text-green-600">1,234</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Rejected</h2>
            <p className="text-3xl font-bold text-red-600">45</p>
          </div>
        </div>
      </div>
    </>
  );
}