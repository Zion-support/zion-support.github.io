import React from 'react';
import { Helmet } from 'react-helmet-async';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of Zion Tech Group's systems and services." />
        <link rel="canonical" href="https://ziontechgroup.com/system-status" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">System Status</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Check the current status of all our systems and services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Systems Operational</h2>
          <p className="text-gray-600 mb-6">
            All our systems are currently running normally. We maintain 99.9% uptime for all our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For status updates or to report issues, contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;