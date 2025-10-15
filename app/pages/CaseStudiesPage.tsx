import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and case studies showcasing our expertise in AI, IT services, and digital transformation." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform with our innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">E-commerce AI Optimization</h3>
              <p className="text-gray-300 mb-4">
                Implemented AI-powered recommendation system that increased sales by 40%.
              </p>
              <div className="text-sm text-gray-400 space-y-2">
                <p><strong>Client:</strong> Online Retailer</p>
                <p><strong>Duration:</strong> 6 months</p>
                <p><strong>Result:</strong> 40% increase in sales</p>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Cloud Migration Success</h3>
              <p className="text-gray-300 mb-4">
                Migrated legacy systems to cloud infrastructure, reducing costs by 60%.
              </p>
              <div className="text-sm text-gray-400 space-y-2">
                <p><strong>Client:</strong> Manufacturing Company</p>
                <p><strong>Duration:</strong> 4 months</p>
                <p><strong>Result:</strong> 60% cost reduction</p>
              </div>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Cybersecurity Enhancement</h3>
              <p className="text-gray-300 mb-4">
                Implemented comprehensive security framework preventing 99.9% of threats.
              </p>
              <div className="text-sm text-gray-400 space-y-2">
                <p><strong>Client:</strong> Financial Services</p>
                <p><strong>Duration:</strong> 3 months</p>
                <p><strong>Result:</strong> 99.9% threat prevention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;