import React from 'react';
import Head from 'next/head';

export default function UserManagement() {
  return (
    <>
      <Head>
        <title>User Management - Admin</title>
        <meta name="description" content="Manage users and permissions" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold text-blue-600">2,456</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Active Users</h2>
            <p className="text-3xl font-bold text-green-600">1,890</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Pending Verification</h2>
            <p className="text-3xl font-bold text-yellow-600">45</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Suspended</h2>
            <p className="text-3xl font-bold text-red-600">12</p>
          </div>
        </div>
      </div>
    </>
  );
}