import React from 'react';
import Head from 'next/head';

export default function PartnerManagement() {
  return (
    <>
      <Head>
        <title>Partner Management - Admin</title>
        <meta name="description" content="Manage partner relationships and metrics" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Partner Management</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Partner Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">156</p>
              <p className="text-gray-600">Total Partners</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">89</p>
              <p className="text-gray-600">Active Partners</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">23</p>
              <p className="text-gray-600">Pending Approval</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">$45K</p>
              <p className="text-gray-600">Total Payouts</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}