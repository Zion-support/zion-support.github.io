import React from 'react';
import Head from 'next/head';

const FraudPage: React.FC = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Head>
        <title>Fraud Monitoring - Admin Review</title>
        <meta name="description" content="Fraud monitoring and detection system" />
      </Head>
      
      <h1 className="text-2xl font-bold mb-4">Fraud Monitoring - Admin Review</h1>
      
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search fraud reports..."
          className="px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-2 border">User</th>
              <th className="p-2 border">Source</th>
              <th className="p-2 border">Timestamp</th>
              <th className="p-2 border">Reason</th>
              <th className="p-2 border">GPT</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FraudPage;