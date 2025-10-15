import React from 'react';
import SEOHead from '../components/SEOHead';

const DocumentationPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for all our AI and IT solutions. Get started with our APIs, SDKs, and integration guides."
        keywords="documentation, API docs, integration guides, developer resources, SDK"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive documentation for all our AI and IT solutions. 
                Get started with our APIs, SDKs, and integration guides.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocumentationPage;
