import React from 'react';
import Head from 'next/head';

export default function SecurityDashboard() {
  return (
    <>
      <Head>
        <title>Security Dashboard - Admin</title>
        <meta name="description" content="Monitor security metrics and threats" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Security Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Critical Alerts</h2>
            <p className="text-3xl font-bold text-red-600">3</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Warnings</h2>
            <p className="text-3xl font-bold text-yellow-600">12</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Security Score</h2>
            <p className="text-3xl font-bold text-green-600">A+</p>
          </div>
        </div>
      </div>
    </>
  );
}