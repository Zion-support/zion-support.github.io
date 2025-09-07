import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function AdminIndex() {
  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-xl font-semibold text-blue-900 mb-4">Content Management</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/admin/partners" className="text-blue-600 hover:text-blue-800 underline">
                      Partners Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/learn" className="text-blue-600 hover:text-blue-800 underline">
                      Learning Resources
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h2 className="text-xl font-semibold text-green-900 mb-4">System Tools</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/admin/integrations" className="text-green-600 hover:text-green-800 underline">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <a href="/api/health" className="text-green-600 hover:text-green-800 underline">
                      System Health
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h2 className="text-xl font-semibold text-purple-900 mb-4">Analytics</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="/admin/analytics" className="text-purple-600 hover:text-purple-800 underline">
                      Usage Analytics
                    </a>
                  </li>
                  <li>
                    <a href="/admin/reports" className="text-purple-600 hover:text-purple-800 underline">
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}