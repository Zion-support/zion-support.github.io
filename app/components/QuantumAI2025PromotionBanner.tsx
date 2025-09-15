import React from 'react';
import Link from 'next/link';

const QuantumAI2025PromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-blue-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="w-3 h-3 bg-white rounded-full mr-2 animate-ping"></span>
            QUANTUM AI 2025 REVOLUTION
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum AI
            </span>
            <br />
            <span className="text-white">Transformation</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
            Master the <strong className="text-cyan-400">1500% ROI</strong> quantum AI revolution that's transforming businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quantum Advantage */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Quantum Advantage</h3>
            </div>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                10,000x faster processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Exponential data handling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Real-time optimization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Breakthrough innovations
              </li>
            </ul>
          </div>

          {/* Business Impact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Business Impact</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">1500%</div>
                <div className="text-sm text-gray-300">ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">60%</div>
                <div className="text-sm text-gray-300">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">95%</div>
                <div className="text-sm text-gray-300">Efficiency Gain</div>
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-2">Applications</h3>
            </div>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Financial Services
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Supply Chain
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Manufacturing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Healthcare
              </li>
            </ul>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                New Quantum AI Content
              </span>
            </h3>
            <p className="text-gray-200 text-lg">
              Master the complete quantum AI transformation with our comprehensive guides and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post */}
            <Link 
              href="/blog/quantum-ai-2025-business-transformation-complete-guide"
              className="group"
            >
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-2">NEW</span>
                      <span className="text-sm text-gray-300">Complete Guide</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      Quantum AI Business Transformation
                    </h4>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      Master quantum AI implementation for unprecedented business transformation. Complete guide to achieving 1500% ROI.
                    </p>
                  </div>
                  <div className="text-5xl ml-4">⚛️</div>
                </div>
                <div className="flex items-center text-cyan-400 font-semibold">
                  <span>Read Complete Guide</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-2">FEATURED</span>
                    <span className="text-sm text-gray-300">Success Story</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">
                    Fortune 500 Quantum Success
                  </h4>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    Discover how a Fortune 500 company achieved 1800% ROI with quantum AI portfolio optimization.
                  </p>
                </div>
                <div className="text-5xl ml-4">💰</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">1800%</div>
                  <div className="text-xs text-gray-300">ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">$2.5B</div>
                  <div className="text-xs text-gray-300">Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">99.9%</div>
                  <div className="text-xs text-gray-300">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12 border border-white/20">
            <h3 className="text-4xl font-bold mb-6">
              Ready for Quantum Transformation?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the quantum AI revolution and achieve unprecedented business success with 1500% ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Quantum Assessment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Quantum Projects</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">$100B+</div>
            <div className="text-sm text-gray-300">Value Generated</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Quantum Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2025PromotionBanner;