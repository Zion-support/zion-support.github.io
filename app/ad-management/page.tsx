import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

export default function AdManagementPage() {
  return (
    <>
      <Helmet>
        <title>Ad Management - Zion Tech Group</title>
        <meta name="description" content="Professional ad management services by Zion Tech Group." />
      </Helmet>
      <SEOHead
        title="Ad Management - Zion Tech Group"
        description="Professional ad management services by Zion Tech Group."
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Ad Management</h1>
          <p className="text-gray-300">Professional ad management solutions coming soon...</p>
        </div>
      </div>
    </>
  );
}
