import React from 'react';
import { Helmet } from 'react-helmet-async';

const AidocumentintelligencePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Document Intelligence - Intelligent document processing and analysis with AI-powered extraction | Zion Tech Group</title>
        <meta name="description" content="Intelligent document processing and analysis with AI-powered extraction." />
        <meta name="keywords" content="document AI, document processing, text extraction, document analysis" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Ai Document Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent document processing and analysis with AI-powered extraction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Features</h3>
              <p className="text-gray-300">
                Cutting-edge technology and innovative solutions designed to meet your business needs.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Leverage artificial intelligence to automate processes and optimize performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Built to grow with your business and adapt to changing requirements.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AidocumentintelligencePage;