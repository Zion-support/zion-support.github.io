import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI services including machine learning, NLP, computer vision, and predictive analytics from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
      </Helmet>
      
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business. From machine learning to computer vision, we deliver cutting-edge AI solutions.
          </p>
          <a 
            href="https://ziontechgroup.com/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Get AI Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
