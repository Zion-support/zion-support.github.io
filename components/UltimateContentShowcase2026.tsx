import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 BREAKTHROUGH CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary Content Collection 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of cutting-edge content covering AI automation, 
            quantum computing, cybersecurity, and enterprise transformation. Stay ahead of the curve 
            with insights from industry leaders and breakthrough technologies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Automation Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">AI Automation</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Comprehensive guides on implementing AI automation across your organization for maximum efficiency and ROI.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Enterprise Automation Strategies
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                ROI Optimization Techniques
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Implementation Roadmaps
              </div>
            </div>
          </div>

          {/* Quantum Computing Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Quantum Computing</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the revolutionary potential of quantum computing in business applications and future technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Quantum Business Applications
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Implementation Strategies
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Future Technology Trends
              </div>
            </div>
          </div>

          {/* Cybersecurity Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Cybersecurity</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Advanced cybersecurity strategies and next-generation threat protection for modern enterprises.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Next-Gen Threat Protection
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Enterprise Security Frameworks
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                AI-Powered Security Solutions
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/content-showcase-2026"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All 2026 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;