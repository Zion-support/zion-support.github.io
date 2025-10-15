import React from 'react';
import SEOHead from '../components/SEOHead';

const PagePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="it-services - Zion Tech Group"
        description="Advanced it-services solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">it-services</h1>
          <p className="text-gray-300">Advanced solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default PagePage;