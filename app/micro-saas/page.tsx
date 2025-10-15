import React from 'react';
import SEOHead from '../components/SEOHead';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Comprehensive micro SaaS solutions for modern businesses with scalable architecture and advanced features."
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Micro SaaS Solutions</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default MicroSaasPage;