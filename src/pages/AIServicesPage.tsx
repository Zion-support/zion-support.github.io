import React from 'react';
import { SEO } from '@/components/SEO';

const AIServicesPage = () => {
  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, natural language processing, and intelligent automation solutions."
        keywords="AI services, machine learning, natural language processing, intelligent automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300 mb-4">Advanced ML algorithms and predictive analytics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-3">NLP Solutions</h3>
              <p className="text-gray-300 mb-4">Natural language processing and understanding</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Automation</h3>
              <p className="text-gray-300 mb-4">Smart automation and process optimization</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;