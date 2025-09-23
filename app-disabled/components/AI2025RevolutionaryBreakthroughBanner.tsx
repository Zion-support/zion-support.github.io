import React from 'react';
import Link from 'next/link';

const AI2025RevolutionaryBreakthroughBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-3 mb-8 font-bold text-lg">
            <span className="mr-2">🚀</span>
            REVOLUTIONARY AI BREAKTHROUGH 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of Business is
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Autonomous AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed mb-12">
            Transform your organization with cutting-edge AI solutions that deliver unprecedented results. 
            Join 500+ companies already achieving 340% efficiency improvements and 500%+ ROI increases.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/blog/ai-2025-generative-ai-enterprise-revolution"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore AI Revolution →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-gray-300 font-semibold">Efficiency Improvement</div>
            <div className="text-sm text-gray-400 mt-2">Average across all implementations</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-green-300 mb-2">500%</div>
            <div className="text-gray-300 font-semibold">ROI Increase</div>
            <div className="text-sm text-gray-400 mt-2">Within first year</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-blue-300 mb-2">90%</div>
            <div className="text-gray-300 font-semibold">Process Automation</div>
            <div className="text-sm text-gray-400 mt-2">Routine operations</div>
          </div>
          <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl font-bold text-purple-300 mb-2">$2.3T</div>
            <div className="text-gray-300 font-semibold">Market Value</div>
            <div className="text-sm text-gray-400 mt-2">AI market by 2025</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Generative AI */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Master the enterprise transformation with generative AI. Complete implementation guide 
              with real-world success stories and proven ROI strategies.
            </p>
            <Link 
              href="/blog/ai-2025-generative-ai-enterprise-revolution"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Autonomous Operations */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Operations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Achieve 90%+ automation of routine operations with AI-powered autonomous systems. 
              Complete implementation framework and best practices.
            </p>
            <Link 
              href="/blog/ai-2025-autonomous-business-operations-complete-guide"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Transformation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover how quantum computing is revolutionizing business operations with 10,000x 
              performance improvements and unprecedented capabilities.
            </p>
            <Link 
              href="/blog/ai-2025-quantum-computing-business-transformation"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
            >
              Explore Quantum AI →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join the AI revolution and achieve unprecedented results. Get your free consultation 
              and personalized implementation strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/resources/ai-2025-implementation-roadmap-ultimate-guide"
                className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025RevolutionaryBreakthroughBanner;