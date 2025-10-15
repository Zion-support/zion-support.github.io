import React from 'react';
import SEOHead from '../components/SEOHead';

const BreadcrumbPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="components - Zion Tech Group"
        description="Advanced components solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">components</h1>
          <p className="text-gray-300">Advanced solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbPage;