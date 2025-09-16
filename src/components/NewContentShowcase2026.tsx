import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-semibold text-white mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            NEW CONTENT AVAILABLE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Tech Content
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              2026 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge insights, breakthrough technologies, and transformative solutions that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Business Automation */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Business Automation</h3>
                <p className="text-blue-300 text-sm">300% ROI in 90 days</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your business operations with cutting-edge AI automation solutions that deliver measurable results.
            </p>
            <Link 
              to="/pages/AIBusinessAutomation2026" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Explore Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quantum Computing</h3>
                <p className="text-purple-300 text-sm">Enterprise Applications</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Harness quantum computing power to solve complex business problems and gain competitive advantage.
            </p>
            <Link 
              to="/pages/QuantumComputingEnterprise2026" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Explore Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Neural Interfaces */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Neural Interfaces</h3>
                <p className="text-green-300 text-sm">Future of HCI</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore next-generation neural interfaces that enable direct brain-computer communication.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Explore Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Latest Blog Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">AI Automation</span>
                <span className="ml-auto text-gray-400 text-sm">Dec 2, 2025</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Business Automation: The Complete 2026 Guide</h4>
              <p className="text-gray-300 text-sm mb-4">Transform your business operations with cutting-edge AI automation solutions that deliver 300% ROI in 90 days.</p>
              <Link to="/blog" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">Read More →</Link>
            </div>

            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">Quantum Computing</span>
                <span className="ml-auto text-gray-400 text-sm">Dec 2, 2025</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quantum Computing Breakthrough: Practical Applications for Enterprise</h4>
              <p className="text-gray-300 text-sm mb-4">How quantum computing is solving real-world business problems and creating new opportunities for competitive advantage.</p>
              <Link to="/blog" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">Read More →</Link>
            </div>

            <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">Neural Interfaces</span>
                <span className="ml-auto text-gray-400 text-sm">Dec 2, 2025</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Neural Interface Technology: The Future of Human-Computer Interaction</h4>
              <p className="text-gray-300 text-sm mb-4">Exploring next-generation neural interfaces that enable direct brain-computer communication and their transformative potential.</p>
              <Link to="/blog" className="text-green-400 hover:text-green-300 text-sm font-semibold">Read More →</Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/blog" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;