import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics."
        keywords="AI services, machine learning, artificial intelligence, predictive analytics, computer vision"
        canonical="/ai-services"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Analytics</h3>
            <p className="text-gray-300 mb-4">Advanced analytics powered by machine learning algorithms.</p>
            <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Automation</h3>
            <p className="text-gray-300 mb-4">Automate repetitive tasks with intelligent AI solutions.</p>
            <a href="/ai-automation" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Content Generation</h3>
            <p className="text-gray-300 mb-4">Generate high-quality content using AI technology.</p>
            <a href="/ai-content-generation" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Customer Service</h3>
            <p className="text-gray-300 mb-4">Intelligent customer support with AI-powered chatbots.</p>
            <a href="/ai-customer-service" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Data Analytics</h3>
            <p className="text-gray-300 mb-4">Extract insights from your data with AI-powered analysis.</p>
            <a href="/ai-data-analytics" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">AI Marketing</h3>
            <p className="text-gray-300 mb-4">Optimize your marketing campaigns with AI insights.</p>
            <a href="/ai-marketing" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;