import React from 'react';
import Link from 'next/link';

const AI2026RevolutionaryBreakthroughBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium flex items-center">
              🚀 <span className="ml-2">AI 2026 REVOLUTIONARY BREAKTHROUGH</span>
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Quantum AI Automation Revolution
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the breakthrough technologies transforming enterprise operations with 
            <span className="font-semibold text-yellow-300"> 450% ROI</span>, 
            <span className="font-semibold text-green-300"> 90% efficiency gains</span>, and 
            <span className="font-semibold text-cyan-300"> quantum-powered automation</span>
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Quantum Automation</h3>
                <p className="text-sm opacity-80">AI 2026 Breakthrough</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Revolutionary quantum AI automation delivering unprecedented business transformation with 450% ROI.
            </p>
            <Link 
              href="/blog/ai-2026-quantum-automation-breakthrough"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm transition-colors"
            >
              Read More <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Featured Blog Post 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Autonomous Systems</h3>
                <p className="text-sm opacity-80">Complete Guide 2026</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Master self-managing enterprise operations with our comprehensive guide to autonomous business systems.
            </p>
            <Link 
              href="/blog/autonomous-business-systems-2026-complete-guide"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm transition-colors"
            >
              Read More <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">1200% ROI Success</h3>
                <p className="text-sm opacity-80">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Discover how a Fortune 500 company achieved 1200% ROI through AI 2026 enterprise transformation.
            </p>
            <Link 
              href="/case-studies/ai-2026-enterprise-transformation-1200-roi-success"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium text-sm transition-colors"
            >
              Read Case Study <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">450%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">90%</div>
            <div className="text-sm opacity-80">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">95%</div>
            <div className="text-sm opacity-80">Decision Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">18</div>
            <div className="text-sm opacity-80">Months to ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services/ai-automation"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Transform Your Business Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Assessment
            </Link>
          </div>
          
          <p className="text-sm opacity-80 mt-4">
            Join 500+ companies already transforming with AI 2026 automation
          </p>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default AI2026RevolutionaryBreakthroughBanner;