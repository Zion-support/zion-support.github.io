import React from 'react';
import { Helmet } from 'react-helmet-async';

const SlaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Service Level Agreement - Zion Tech Group</title>
        <meta name="description" content="Service Level Agreement for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Service Level Agreement</h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="mb-4">Last updated: January 15, 2024</p>
            <p className="mb-6">This SLA outlines our commitment to service availability and support.</p>
            <p className="mb-4">We guarantee 99.9% uptime for our services.</p>
            <p className="mb-4">For questions about this SLA, please contact us at support@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlaPage;
