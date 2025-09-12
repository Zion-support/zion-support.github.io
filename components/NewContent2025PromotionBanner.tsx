import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContent2025PromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-5 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 FRESH CONTENT - JANUARY 2025</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            🚀 Revolutionary AI Content Just Dropped!
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover our latest breakthroughs in AI architecture, financial transformation, and cybersecurity defense. 
            Expert insights, proven strategies, and actionable implementation guides.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              to="/resources/ai-implementation-master-guide-2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              📚 Download Master Guide
            </Link>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Neural Networks Article */}
            <Link to="/blog/ai-2025-advanced-neural-networks" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  Advanced Neural Networks
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Explore cutting-edge neural network architectures including transformers, GANs, and quantum-enhanced systems.
                </p>
                <div className="flex items-center text-xs opacity-75">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span>Architecture</span>
                </div>
              </div>
            </Link>
            
            {/* Financial Services Case Study */}
            <Link to="/case-studies/ai-2025-financial-services-transformation" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  Financial Services Success
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Discover how a Fortune 500 company achieved 1500% ROI through comprehensive AI transformation.
                </p>
                <div className="flex items-center text-xs opacity-75">
                  <span>20 min read</span>
                  <span className="mx-2">•</span>
                  <span>Case Study</span>
                </div>
              </div>
            </Link>
            
            {/* Cybersecurity Guide */}
            <Link to="/resources/ai-2025-cybersecurity-defense-guide" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  Cybersecurity Defense Guide
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Master AI-powered cybersecurity strategies, threat detection, and automated incident response.
                </p>
                <div className="flex items-center text-xs opacity-75">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>Security Guide</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Additional highlights */}
          <div className="mt-12 grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">3</div>
              <p className="text-sm opacity-75">New Articles</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">1500%</div>
              <p className="text-sm opacity-75">ROI Case Study</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">95%</div>
              <p className="text-sm opacity-75">AI Detection Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">2025</div>
              <p className="text-sm opacity-75">Latest Strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}