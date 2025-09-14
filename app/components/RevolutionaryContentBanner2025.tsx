import React from 'react';
import Link from 'next/link';

const RevolutionaryContentBanner2025 = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🌟 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Transform Your Business with AI
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions, quantum computing breakthroughs, 
            and enterprise transformation strategies that will revolutionize your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Enterprise Revolution</h3>
                  <div className="text-yellow-300 text-sm font-semibold">FEATURED GUIDE</div>
                </div>
              </div>
              <p className="text-lg mb-6 text-gray-100">
                Complete guide to AI transformation with real-world case studies, 
                ROI strategies, and implementation roadmaps for enterprise success.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise AI
                </span>
                <span className="bg-blue-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Implementation Guide
                </span>
                <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ROI Strategies
                </span>
              </div>
              <Link 
                href="/blog/ai-2025-enterprise-ai-revolution-complete-guide"
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Read Complete Guide →
              </Link>
            </div>

            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">⚛️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quantum AI Breakthrough</h3>
                  <div className="text-yellow-300 text-sm font-semibold">NEXT-GEN INTELLIGENCE</div>
                </div>
              </div>
              <p className="text-lg mb-6 text-gray-100">
                Explore the revolutionary intersection of quantum computing and AI. 
                Discover unprecedented business opportunities and applications.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Quantum Computing
                </span>
                <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AI Revolution
                </span>
                <span className="bg-indigo-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Business Innovation
                </span>
              </div>
              <Link 
                href="/blog/quantum-ai-2025-business-breakthrough-ultimate-guide"
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Discover Quantum AI →
              </Link>
            </div>
          </div>

          {/* Right Column - Implementation Resources */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">📋</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Implementation Master Guide</h3>
                  <div className="text-yellow-300 text-sm font-semibold">ULTIMATE ROADMAP</div>
                </div>
              </div>
              <p className="text-lg mb-6 text-gray-100">
                Complete step-by-step guide to AI implementation success. 
                From strategy to deployment, everything you need to know.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-200">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Strategic Planning & Assessment</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Technology Stack Selection</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Team Building & Training</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span>Pilot Projects & Scaling</span>
                </div>
              </div>
              <Link 
                href="/resources/ai-2025-implementation-master-guide-ultimate"
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Get Master Guide →
              </Link>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                <p className="text-lg mb-6">
                  Get expert guidance and implementation support for your AI transformation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                  >
                    Get Expert Help
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-black text-black px-6 py-3 rounded-lg font-bold hover:bg-black hover:text-yellow-400 transition-colors"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-4">Join the AI Revolution</h3>
            <p className="text-xl mb-8 text-gray-200">
              Don't get left behind. Start your AI transformation journey today with our comprehensive guides and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2025;