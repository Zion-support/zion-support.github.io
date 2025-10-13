import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Explore our advanced AI solutions including machine learning, natural language processing, and predictive analytics." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
              <p className="text-gray-300 mb-6">Custom ML models tailored to your specific business needs and data.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6">Advanced NLP solutions for text analysis and language understanding.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Predictive Analytics</h3>
              <p className="text-gray-300 mb-6">Data-driven insights and predictions to guide business decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;
