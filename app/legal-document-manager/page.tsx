import React from 'react';
import SEOHead from './components/SEOHead';

const LegalDocumentManagerPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Legal Document Manager - Zion Tech Group"
        description="Professional legal document manager solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Document Manager</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default LegalDocumentManagerPage;