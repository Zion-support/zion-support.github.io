import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Careers <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">at Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team and help shape the future of technology
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - Careers Page</p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
