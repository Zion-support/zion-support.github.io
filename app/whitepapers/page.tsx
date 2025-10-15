import React from 'react';
import SEOHead from './components/SEOHead';

const WhitepapersPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Whitepapers - Zion Tech Group"
        description="Professional whitepapers solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Whitepapers</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default WhitepapersPage;
