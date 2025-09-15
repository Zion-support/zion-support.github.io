import React from 'react';
import Link from 'next/link';

const RevolutionaryAI2025ContentBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-12 scale-110"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-pink-400 to-purple-500 transform -rotate-12 scale-110"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg">
            🔥 REVOLUTIONARY AI CONTENT 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            The Future of AI is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover groundbreaking AI technologiesimplementation strategiesand real-world applications 
            that are reshaping industries and creating unprecedented opportunities for business transformation.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Edge Computing Feature */}
          <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Edge Computing Revolution</h3>
                <p className="text-sm opacity-80 mb-4">Ultimate Guide to Distributed Intelligence</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Real-time Processing</span>
                  <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">IoT Integration</span>
                  <span className="bg-purple-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">5G Networks</span>
                </div>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Master the art of deploying AI at the edge with our comprehensive guide covering distributed intelligence
              ultra-low latency processingand real-world implementation strategies that are transforming industries.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-edge-computing-revolution-ultimate-guide"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-lg"
              >
                Read Complete Guide →
              </Link>
              <div className="text-sm opacity-80">
                <span className="font-semibold">15 min read</span>
              </div>
            </div>
          </div>

          {/* Conversational AI Feature */}
          <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-3xl">💬</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Conversational AI Revolution</h3>
                <p className="text-sm opacity-80 mb-4">Enterprise Transformation Through NLP</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Voice AI</span>
                  <span className="bg-purple-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Emotional Intelligence</span>
                  <span className="bg-green-500 bg-opacity-30 px-3 py-1 rounded-full text-xs">Customer Experience</span>
                </div>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Transform your customer interactions with advanced conversational AI that understands contextemotion
              and intent. Learn how to implement chatbots and voice assistants that deliver truly human-like experiences.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-conversational-ai-revolution-enterprise-transformation"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-lg"
              >
                Explore Now →
              </Link>
              <div className="text-sm opacity-80">
                <span className="font-semibold">12 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap Feature */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12 text-black mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Complete AI Implementation Roadmap
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Your step-by-step guide to AI transformation. From strategy development to full-scale deployment 
              with proven methodologiesbest practicesand real-world success stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Strategic Foundation</h4>
              <p className="opacity-80">Business case developmentreadiness assessmentand AI strategy formulation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Technology Selection</h4>
              <p className="opacity-80">Architecture designplatform selectionand vendor evaluation processes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Implementation & Scale</h4>
              <p className="opacity-80">Pilot projectsfull deploymentoptimizationand continuous improvement.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/resources/ai-2025-implementation-complete-roadmap"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Download Complete Roadmap →
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="font-bold mb-2">AI Automation</h4>
            <p className="text-sm opacity-80">Streamline operations with intelligent automation</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔮</span>
            </div>
            <h4 className="font-bold mb-2">Predictive Analytics</h4>
            <p className="text-sm opacity-80">Forecast trends and optimize decisions</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h4 className="font-bold mb-2">Computer Vision</h4>
            <p className="text-sm opacity-80">Extract insights from images and videos</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="font-bold mb-2">AI Security</h4>
            <p className="text-sm opacity-80">Protect your AI systems and data</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Lead the AI Revolution?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the elite group of forward-thinking companies already implementing these 
            revolutionary AI technologies and transforming their industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAI2025ContentBanner;