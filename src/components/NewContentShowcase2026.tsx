import React from 'react';
import { Link } from 'react-router-dom';

const NewContentShowcase2026: React.FC = () => {
  return (
    <>
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
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
      </div>
    </div>

    <div className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the newest content covering AI ethics, quantum computing, edge AI, and advanced services 
            that are shaping the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Ethics Framework */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Ethics Framework 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Comprehensive guide to implementing ethical AI frameworks that ensure fairness, 
              transparency, and accountability in artificial intelligence systems.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">12 min read</span>
              <span className="text-gray-400 text-sm">Dr. Elena Rodriguez</span>
            </div>
            <Link 
              to="/blog/ai-ethics-framework-2026" 
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Quantum Computing Breakthrough */}
          <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Quantum Computing Breakthrough 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Revolutionary advances in quantum computing are unlocking unprecedented computational 
              power and transforming industries across the globe.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">15 min read</span>
              <span className="text-gray-400 text-sm">Dr. Marcus Chen</span>
            </div>
            <Link 
              to="/blog/quantum-computing-breakthrough-2026" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Edge AI Revolution */}
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Edge AI Revolution 2026
            </h3>
            <p className="text-gray-300 mb-6">
              The convergence of AI and edge computing is creating unprecedented opportunities 
              for real-time, privacy-preserving intelligence across industries.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">10 min read</span>
              <span className="text-gray-400 text-sm">Dr. Priya Patel</span>
            </div>
            <Link 
              to="/blog/edge-ai-revolution-2026" 
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Advanced AI Services */}
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <span className="text-green-400 text-sm font-semibold">NEW</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Advanced AI Services 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Comprehensive AI services from machine learning to quantum AI. Transform your business 
              with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">Service Page</span>
              <span className="text-gray-400 text-sm">Zion Tech Group</span>
            </div>
            <Link 
              to="/advanced-ai-services-2026" 
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* AI Innovation Hub */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI Innovation Hub 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Explore the revolutionary AI innovations that are reshaping technology and 
              transforming industries worldwide.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">8 min read</span>
              <span className="text-gray-400 text-sm">Dr. Sarah Chen</span>
            </div>
            <Link 
              to="/ai-innovation-hub-2026" 
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
            >
              Read Article
            </Link>
          </div>

          {/* Quantum Computing Guide */}
          <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-blue-400 text-sm font-semibold">FEATURED</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Quantum Computing Guide 2026
            </h3>
            <p className="text-gray-300 mb-6">
              Complete guide to quantum computing applications, algorithms, and implementation 
              strategies for modern businesses.
            </p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm">Guide</span>
              <span className="text-gray-400 text-sm">Zion Tech Group</span>
            </div>
            <Link 
              to="/quantum-computing-guide-2026" 
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
            >
              View Guide
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
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              View All Content
            </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewContentShowcase2026;