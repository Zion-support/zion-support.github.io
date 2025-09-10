import React from 'react';
import Head from 'next/head';

export default function SupportManagement() {
  return (
    <>
      <Head>
        <title>Support Management - Admin</title>
        <meta name="description" content="Manage support tickets and requests" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Support Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Open Tickets</h2>
            <p className="text-3xl font-bold text-red-600">23</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">In Progress</h2>
            <p className="text-3xl font-bold text-yellow-600">15</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Resolved</h2>
            <p className="text-3xl font-bold text-green-600">1,234</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Avg Response</h2>
            <p className="text-3xl font-bold text-blue-600">2.3h</p>
          </div>
        </div>
      </div>
    </>
  );
}