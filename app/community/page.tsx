import React from 'react';
import { Helmet } from 'react-helmet-async';

const CommunityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Join our community of developers, innovators, and technology enthusiasts." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Community</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our community of developers and innovators
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;