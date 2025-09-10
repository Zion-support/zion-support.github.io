import React from 'react';
import Head from 'next/head';

export default function ReportManagement() {
  return (
    <>
      <Head>
        <title>Report Management - Admin</title>
        <meta name="description" content="Generate and manage system reports" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Report Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Weekly Reports</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>SEO Report</span>
                <span className="text-green-600">Generated</span>
              </li>
              <li className="flex justify-between">
                <span>Performance Report</span>
                <span className="text-green-600">Generated</span>
              </li>
              <li className="flex justify-between">
                <span>Uptime Report</span>
                <span className="text-yellow-600">Pending</span>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">System Health</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>API Response Time</span>
                <span className="text-green-600">120ms</span>
              </div>
              <div className="flex justify-between">
                <span>Error Rate</span>
                <span className="text-green-600">0.2%</span>
              </div>
              <div className="flex justify-between">
                <span>Uptime</span>
                <span className="text-green-600">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}