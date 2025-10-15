import React from 'react';
import SEOHead from '../components/SEOHead';

const CommunityPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Community - Zion Tech Group"
        description="Join our vibrant community of developers, innovators, and technology enthusiasts."
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
