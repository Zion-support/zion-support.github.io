import React from 'react';
import Head from 'next/head';

export default function AutomationStatus() {
  return (
    <>
      <Head>
        <title>Automation Status - Admin</title>
        <meta name="description" content="View automation system status" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Automation Status</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Build System</h2>
            <p className="text-green-600">Running</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Testing</h2>
            <p className="text-green-600">Active</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Deployment</h2>
            <p className="text-yellow-600">Pending</p>
          </div>
        </div>
      </div>
    </>
  );
}