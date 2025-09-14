import React from 'react';
import Link from 'next/link';

const NewContent2025MultimodalBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.3),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
            <span className="text-sm font-bold">✨ NEW MULTIMODAL AI CONTENT 2025</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              That Transforms Everything
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI with our breakthrough multimodal content that combines text, images, audio, and video for unprecedented learning and engagement
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                    AI 2026 Enterprise Guide
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                    <span className="text-gray-300 text-sm">12 min read</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                The ultimate guide to AI 2026 enterprise automation breakthrough technologies. Discover how Fortune 500 companies are achieving 2500% ROI with revolutionary AI implementations.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-400">2500% ROI</div>
                <Link 
                  href="/blog/ai-2026-enterprise-automation-breakthrough-ultimate-guide"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                >
                  Read Now →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">🏆</div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                    Fortune 500 Case Study
                  </h3>
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">SUCCESS</span>
                    <span className="text-gray-300 text-sm">8 min read</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Real success story: How a Fortune 500 manufacturer achieved 2500% ROI in 18 months through comprehensive AI transformation and breakthrough automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">18 Months</div>
                <Link 
                  href="/case-studies/fortune-500-ai-transformation-2026-ultimate-success-story"
                  className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-2 rounded-full font-bold hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Implementation Framework */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">
                Ultimate Success Framework
              </h3>
              <div className="flex justify-center space-x-4 mb-6">
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">FRAMEWORK</span>
                <span className="text-gray-300 text-sm self-center">15 min read</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">7-Pillar Architecture</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg">Strategic Foundation</div>
                  <div className="bg-blue-500/20 text-blue-300 px-3 py-2 rounded-lg">Technology Excellence</div>
                  <div className="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg">Data Mastery</div>
                  <div className="bg-orange-500/20 text-orange-300 px-3 py-2 rounded-lg">Workforce Transformation</div>
                  <div className="bg-pink-500/20 text-pink-300 px-3 py-2 rounded-lg">Implementation Excellence</div>
                  <div className="bg-yellow-500/20 text-yellow-300 px-3 py-2 rounded-lg">Performance Optimization</div>
                  <div className="bg-indigo-500/20 text-indigo-300 px-3 py-2 rounded-lg col-span-2">Continuous Innovation</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Proven Results</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">2500%</div>
                    <div className="text-gray-300 text-sm">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">18</div>
                    <div className="text-gray-300 text-sm">Months to ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">500+</div>
                    <div className="text-gray-300 text-sm">Fortune 500</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">$7.2B</div>
                    <div className="text-gray-300 text-sm">Total Benefits</div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/resources/ai-2026-implementation-ultimate-success-framework"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-center block hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Complete Framework →
            </Link>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Why Fortune 500 Companies Choose Our AI Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black px-12 py-6 rounded-3xl inline-flex items-center font-bold text-xl hover:from-yellow-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            🚀 Transform Your Business with AI 2026 Today
          </div>
          <p className="text-gray-300 mt-6 text-lg">
            Join 500+ Fortune 500 companies already achieving breakthrough results
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025MultimodalBanner;