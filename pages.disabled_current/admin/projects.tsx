import React from 'react';
import Head from 'next/head';

export default function ProjectManagement() {
  return (
    <>
      <Head>
        <title>Project Management - Admin</title>
        <meta name="description" content="Manage projects and milestones" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Project Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Active Projects</h2>
            <p className="text-3xl font-bold text-blue-600">24</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Completed</h2>
            <p className="text-3xl font-bold text-green-600">156</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">In Review</h2>
            <p className="text-3xl font-bold text-yellow-600">8</p>
          </div>
        </div>
      </div>
    </>
  );
}